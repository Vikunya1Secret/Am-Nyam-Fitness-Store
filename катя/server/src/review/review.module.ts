import { Module } from '@nestjs/common'
import { ProductService } from 'src/product/product.service'
import { ReviewController } from './review.controller'
import { ReviewService } from './review.service'
import { PrismaService } from '@/prisma/prisma.service'
import { UserService } from '@/user/user.service'

@Module({
	controllers: [ReviewController],
	providers: [ReviewService, PrismaService, ProductService, UserService]
})
export class ReviewModule {}
