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
} from '@nestjs/common'
import { ColorService } from './color.service'
import { ColorDto } from './dto/color.dto'
import { Authorization } from '@/auth/decorators/auth.decorator'

@Controller('colors')
export class ColorController {
	constructor(private readonly colorService: ColorService) {}

	@Authorization()
	@Get('by-storeId/:storeId')
	async getByStoreId(@Param('storeId') storeId: string) {
		return this.colorService.getByStoreId(storeId)
	}

	@Authorization()
	@Get('by-id/:id')
	async getById(@Param('id') id: string) {
		return this.colorService.getById(id)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Authorization()
	@Post(':storeId')
	async create(@Param('storeId') storeId: string, @Body() dto: ColorDto) {
		return this.colorService.create(storeId, dto)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Authorization()
	@Put(':id')
	async update(@Param('id') id: string, @Body() dto: ColorDto) {
		return this.colorService.update(id, dto)
	}

	@HttpCode(200)
	@Authorization()
	@Delete(':id')
	async delete(@Param('id') id: string) {
		return this.colorService.delete(id)
	}
}
