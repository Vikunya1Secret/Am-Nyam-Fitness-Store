import { Module } from '@nestjs/common'
import { PrismaService } from '@/prisma/prisma.service'
import { OrderController } from './order.controller'
import { OrderService } from './order.service'

@Module({
	controllers: [OrderController],
	providers: [OrderService, PrismaService]
})
export class OrderModule {}
