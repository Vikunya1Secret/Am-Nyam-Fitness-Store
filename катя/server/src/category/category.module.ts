import { Module } from '@nestjs/common'
import { CategoryController } from './category.controller'
import { CategoryService } from './category.service'
import { PrismaService } from '@/prisma/prisma.service'
import { UserService } from '@/user/user.service'

@Module({
	controllers: [CategoryController],
	providers: [CategoryService, PrismaService, UserService]
})
export class CategoryModule {}
