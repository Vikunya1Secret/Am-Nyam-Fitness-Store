import {
	IsEmail,
	IsNotEmpty,
	IsString,
	MinLength,
} from 'class-validator'

/**
 * DTO для регистрации пользователя.
 */
export class RegisterDto {
	/**
	 * Имя пользователя.
	 * @example John Doe
	 */
	@IsString({ message: 'Имя должно быть строкой.' })
	@IsNotEmpty({ message: 'Имя обязательно для заполнения.' })
	name: string

	/**
	 * Email пользователя.
	 * @example example@example.com
	 */
	@IsString({ message: 'Email должен быть строкой.' })
	@IsEmail({}, { message: 'Некорректный формат email.' })
	@IsNotEmpty({ message: 'Email обязателен для заполнения.' })
	email: string

	/**
	 * Пароль пользователя.
	 * @example password123
	 */
	@IsString({ message: 'Пароль должен быть строкой.' })
	@IsNotEmpty({ message: 'Пароль обязателен для заполнения.' })
	@MinLength(6, {
		message: 'Пароль должен содержать минимум 6 символов.'
	})
	password: string
}