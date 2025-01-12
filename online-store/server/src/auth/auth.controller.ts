import {
	Body,
	Controller,
	Get,
	HttpCode,
	Post,
	Req,
	Res,
	UseGuards,
	UnauthorizedException,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { Request, Response } from 'express'

import { AuthGuard } from '@nestjs/passport'
import { AuthService } from './auth.service'
import { LoginDto } from './dto/login.dto'
import { RegisterDto } from './dto/register.dto'

/**
 * Контроллер для управления авторизацией пользователей.
 */
@Controller('auth')
export class AuthController {
	public constructor(
		private readonly authService: AuthService,
	) {}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post('register')
	async register(
		@Body() dto: RegisterDto,
		@Res({ passthrough: true }) res: Response
	) {
		const { refreshToken, ...response } =
			await this.authService.register(dto)

		this.authService.addRefreshTokenToResponse(res, refreshToken)

		return response
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post('login')
	async login(
		@Body() dto: LoginDto,
		@Res({ passthrough: true }) res: Response
	) {
		const { refreshToken, ...response } = await this.authService.login(dto)

		this.authService.addRefreshTokenToResponse(res, refreshToken)

		return response
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post('login/access-token')
	async getNewTokens(
		@Req() req: Request,
		@Res({ passthrough: true }) res: Response
	) {
		const refreshTokenFromCookies =
			req.cookies[this.authService.REFRESH_TOKEN_NAME]

		if (!refreshTokenFromCookies) {
			this.authService.removeRefreshTokenFromResponse(res)
			throw new UnauthorizedException('Refresh токен не прошел')
		}

		const { refreshToken, ...response } =
			await this.authService.getNewTokens(refreshTokenFromCookies)

		this.authService.addRefreshTokenToResponse(res, refreshToken)

		return response
	}

	@HttpCode(200)
	@Post('logout')
	async logout(@Res({ passthrough: true }) res: Response) {
		this.authService.removeRefreshTokenFromResponse(res)
		return true
	}

	@Get('google')
	@UseGuards(AuthGuard('google'))
	async googleAuth(@Req() req) {}

	@Get('google/callback')
	@UseGuards(AuthGuard('google'))
	async googleAuthCallback(
		@Req() req,
		@Res({ passthrough: true }) res: Response
	) {
		const { refreshToken, ...response } =
			await this.authService.validateOAuthLogin(req)

		this.authService.addRefreshTokenToResponse(res, refreshToken)

		return res.redirect(
			`${process.env['ALLOWED_ORIGIN']}/dashboard?accessToken=${response.accessToken}`
		)
	}

	@Get('yandex')
	@UseGuards(AuthGuard('yandex'))
	async yandexAuth(@Req() req) {}

	@Get('yandex/callback')
	@UseGuards(AuthGuard('yandex'))
	async yandexAuthCallback(
		@Req() req,
		@Res({ passthrough: true }) res: Response
	) {
		const { refreshToken, ...response } =
			await this.authService.validateOAuthLogin(req)

		this.authService.addRefreshTokenToResponse(res, refreshToken)

		return res.redirect(
			`${process.env['ALLOWED_ORIGIN']}/dashboard?accessToken=${response.accessToken}`
		)
	}
}