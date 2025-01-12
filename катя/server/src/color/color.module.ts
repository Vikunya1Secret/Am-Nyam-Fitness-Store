import { Module } from '@nestjs/common'
import { ColorController } from './color.controller'
import { ColorService } from './color.service'
import { PrismaService } from '@/prisma/prisma.service'
import { UserService } from '@/user/user.service'

@Module({
	controllers: [ColorController],
	providers: [ColorService, PrismaService, UserService]
})
export class ColorModule {}
