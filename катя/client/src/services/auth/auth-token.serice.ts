import Cookies from 'js-cookie'

export enum EnumTokens {
	'ACCESS_TOKEN' = 'accessToken',
	'REFRESH_TOKEN' = 'refreshToken'
}
/* функция на получение AccessToken из куки*/
export const getAccessToken = () => {
	const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN)
	return accessToken || null
}
/* сохраняем accessToken в куку*/
export const saveTokenStorage = (accessToken: string) => {
	Cookies.set(EnumTokens.ACCESS_TOKEN, accessToken, {
		domain: process.env.APP_DOMAIN,
		sameSite: 'strict',
		expires: 1
	})
}
/* вызываем метод после успешного выхода из системы*/
export const removeFromStorage = () => {
	Cookies.remove(EnumTokens.ACCESS_TOKEN)
}
