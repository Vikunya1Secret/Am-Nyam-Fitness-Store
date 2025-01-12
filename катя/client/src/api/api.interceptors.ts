import axios, { CreateAxiosDefaults } from 'axios'

import { SERVER_URL } from '@/config/api.config'

import {
	getAccessToken,
	removeFromStorage
} from '@/services/auth/auth-token.serice'
import { authService } from '@/services/auth/auth.service'

import { errorCatch, getContentType } from './api.hepler'

const options: CreateAxiosDefaults = {
	baseURL: SERVER_URL,
	headers: getContentType(),
	withCredentials: true
}

const axiosClassic = axios.create(options)
const axiosWithAuth = axios.create(options)

axiosWithAuth.interceptors.request.use(config => {
	const accessToken = getAccessToken()

	if (config?.headers && accessToken)
		config.headers.Authorization = `Bearer ${accessToken}`

	return config
})

axiosWithAuth.interceptors.response.use(
	config => config,
	async error => {
		const originalRequest = error.config

		if (
			(error?.response?.status === 401 ||
				errorCatch(error) === 'jwt expried' ||
				errorCatch(error) === 'jwt must be provided') &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true
			try {
				await authService.getNewTokens()
				return axiosWithAuth.request(originalRequest)
			} catch (error) {
				if (errorCatch(error) === 'jwt expired') removeFromStorage()
			}
		}

		throw error
	}
)

export { axiosClassic, axiosWithAuth }

/*import axios, { CreateAxiosDefaults } from 'axios'

import { SERVER_URL } from '@/config/api.config'

import {
	getAccessToken,
	removeFromStorage
} from '@/services/auth/auth-token.serice'
import { authService } from '@/services/auth/auth.service'

import { errorCatch, getContentType } from './api.hepler'

const options: CreateAxiosDefaults = {
	baseURL: SERVER_URL,
	headers: getContentType(),
	/* тк работаем с серверными куками поэтому это обязательно 
	withCredentials: true
}
/* энтерсептер доступен всем
const axiosClassic = axios.create(options)
/* доступен авторезированым, юудем прикреплять наш токен к запросу, а в ответе будем обробатывать различные ошибки
const axiosWithAuth = axios.create(options)
/*request - запрос
axiosWithAuth.interceptors.request.use(config => {
	/* отдаёт нам AccessToken из нашего authToken сервиса 
	const accessToken = getAccessToken()

	if (config?.headers && accessToken)
		config.headers.Authorization = `Bearer ${accessToken}`

	return config
})
/* response - ответ
тут обробатываем наши ошибки  
axiosWithAuth.interceptors.response.use(
	config => config,
	async error => {
		const originalRequest = error.config

		if (
			/* jwt expried - наш токен закончился 
			jwt must be provided - нам нужно прокинуть рефреш токен, а мы его не прокинули
			!error.config._isRetry - запрос не должен быть повторяемым
			removeFromStorage() - удаляем наши токены
			(error?.response?.status === 401 ||
				errorCatch(error) === 'jwt expried' ||
				errorCatch(error) === 'jwt must be provided') &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true
			try {
				await authService.getNewTokens()
				return axiosWithAuth.request(originalRequest)
			} catch (error) {
				if (errorCatch(error) === 'jwt expired') removeFromStorage()
			}
		}

		throw error
	}
)

export { axiosClassic, axiosWithAuth }
*/