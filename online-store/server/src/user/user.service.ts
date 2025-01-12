import { Injectable, NotFoundException } from '@nestjs/common'
import { hash } from 'argon2'

import { PrismaService } from '@/prisma/prisma.service'

import { UpdateUserDto } from './dto/update-user.dto'

/**
 * Сервис для работы с пользователями.
 */
@Injectable()
export class UserService {
	/**
	 * Конструктор сервиса пользователей.
	 * @param prismaService - Сервис для работы с базой данных Prisma.
	 */
	public constructor(private readonly prismaService: PrismaService) {}

	/**
	 * Находит пользователя по ID.
	 * @param {string} id - ID пользователя.
	 * @returns {Promise<User>} Найденный пользователь.
	 * @throws {NotFoundException} Если пользователь не найден.
	 */
	public async getById(id: string) {
		const user = await this.prismaService.user.findUnique({
			where: {
				id
			},
			include: {
				stores: true,
				favourites: {
					include: {
						category: true
					}
				},
				orders: true
			}
		})

		if (!user) {
			throw new NotFoundException(
				'Пользователь не найден. Пожалуйста, проверьте введенные данные.'
			)
		}

		return user
	}

	/**
	 * Находит пользователя по email.
	 * @param {string} email - Email пользователя.
	 * @returns {Promise<User | null>} Найденный пользователь или null, если не найден.
	 */
	public async getByEmail(email: string) {
		const user = await this.prismaService.user.findUnique({
			where: {
				email
			},
			include: {
				stores: true,
				favourites: true,
				orders: true
			}
		})

		return user
	}

	async toggleFavourite(productId: string, userId: string) {
		const user = await this.getById(userId)

		const isExists = user.favourites.some(
			product => product.id === productId
		)

		await this.prismaService.user.update({
			where: {
				id: user.id
			},
			data: {
				favourites: {
					[isExists ? 'disconnect' : 'connect']: {
						id: productId
					}
				}
			}
		})

		return true
	}

	async create(
		email: string,
		password: string,
		displayName: string,
	) {
		return this.prismaService.user.create({
			data: {
				email,
				password: password ? await hash(password) : '',
				displayName,
			}
		})
	}

	/**
	 * Обновляет данные пользователя.
	 * @param userId - ID пользователя.
	 * @param dto - Данные для обновления пользователя.
	 * @returns Обновленный пользователь.
	 */
	public async update(userId: string, dto: UpdateUserDto) {
		const user = await this.getById(userId)

		const updatedUser = await this.prismaService.user.update({
			where: {
				id: user.id
			},
			data: {
				email: dto.email,
				displayName: dto.name,
			}
		})

		return updatedUser
	}
}
