import { Injectable, NotFoundException } from '@nestjs/common'
import { CategoryDto } from './dto/category.dto'
import { PrismaService } from '@/prisma/prisma.service'

@Injectable()
export class CategoryService {
	constructor(private prisma: PrismaService) {}

	async getByStoreId(storeId: string) {
		return this.prisma.category.findMany({
			where: {
				storeId
			}
		})
	}

	async getById(id: string) {
		const category = await this.prisma.category.findUnique({
			where: {
				id
			}
		})

		if (!category) throw new NotFoundException('Категория не найдена')

		return category
	}

	async create(storeId: string, dto: CategoryDto) {
		return this.prisma.category.create({
			data: {
				title: dto.title,
				description: dto.description,
				storeId
			}
		})
	}

	async update(id: string, dto: CategoryDto) {
		await this.getById(id)

		return this.prisma.category.update({
			where: { id },
			data: dto
		})
	}

	async delete(id: string) {
		await this.getById(id)

		return this.prisma.category.delete({
			where: { id }
		})
	}
}