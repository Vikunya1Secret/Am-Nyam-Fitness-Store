import { IUser } from './user.interface'
/* типизация для наших полей*/
export interface IAuthForm {
	name: string
	email: string
	password: string
}
/* то что нам приходит в ответе после успешной авторизации*/
export interface IAuthResponse {
	user: IUser
	accessToken: string
}
