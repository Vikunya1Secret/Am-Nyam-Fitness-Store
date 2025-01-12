import { Module } from '@nestjs/common';
import { StoreService } from './store.service';
import { StoreController } from './store.controller';
import { PrismaService } from '@/prisma/prisma.service';
import { UserService } from '@/user/user.service';

@Module({
  controllers: [StoreController],
  providers: [StoreService, PrismaService, UserService],
})
export class StoreModule {}
