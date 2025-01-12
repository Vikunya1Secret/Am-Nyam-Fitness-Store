import { applyDecorators, UseGuards } from '@nestjs/common'
import { UserRole } from '@prisma/__generated__'

import { JwtAuthGuard } from '../guards/jwt-auth.guard'
import { RolesGuard } from '../guards/roles.guard'

import { Roles } from './roles.decorator'

/**
 * Декоратор для авторизации пользователей с определенными ролями.
 *
 * Этот декоратор применяет защиту на основе ролей и аутентификации.
 * Если указаны роли, применяется также декоратор Roles.
 *
 * @param roles - Массив ролей, для которых требуется доступ.
 * @returns Декораторы, применяемые к методу или классу.
 */
export function Auth(...roles: UserRole[]) {
	if (roles.length > 0) {
		return applyDecorators(
			Roles(...roles),
			UseGuards(JwtAuthGuard, RolesGuard)
		)
	}

	return applyDecorators(UseGuards(JwtAuthGuard))
}