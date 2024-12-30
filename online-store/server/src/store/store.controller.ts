import { 	
  Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	Post,
	Put,
	UsePipes,
	ValidationPipe
} from '@nestjs/common';
import { StoreService } from './store.service';
import { Authorization } from '@/auth/decorators/auth.decorator';
import { CurrentUser } from '@/user/decorators/user.decorator';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';

@Controller('stores')
export class StoreController {
	constructor(private readonly storeService: StoreService) {}

	@Authorization()
	@Get('by-id/:id')
	async getById(
		@Param('id') storeId: string,
		@CurrentUser('id') userId: string
	) {
		return this.storeService.getById(storeId, userId)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
  @Authorization()
	@Post()
	async create(
		@CurrentUser('id') userId: string,
		@Body() dto: CreateStoreDto
	) {
		return this.storeService.create(userId, dto)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Authorization()
	@Put(':id')
	async update(
		@Param('id') storeId: string,
		@CurrentUser('id') userId: string,
		@Body() dto: UpdateStoreDto
	) {
		return this.storeService.update(storeId, userId, dto)
	}

	@HttpCode(200)
	@Authorization()
	@Delete(':id')
	async delete(
		@Param('id') storeId: string,
		@CurrentUser('id') userId: string
	) {
		return this.storeService.delete(storeId, userId)
	}
}
