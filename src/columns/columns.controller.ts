import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateColumnDto } from './colums.dto';
import { ColumnsService } from './columns.service';

@ApiTags('columns')
@Controller('columns')
export class ColumnsController {
  constructor(private columnsService: ColumnsService) {}

  @Post('createColumn')
  createColumn(@Body() createColumtDto: CreateColumnDto): void {
    this.columnsService.createColumn(createColumtDto);
  }

  @Delete(':id')
  deleteColumn(@Param('id') id: number): void {
    this.columnsService.deleteColumn(id);
  }

  @Get('getColumns')
  getColumns(): void {
    this.columnsService.getColumns();
  }

  @Get(':id')
  getCurrentColumn(@Param('id') id: number): void {
    this.columnsService.getCurrentColumn(id);
  }
}
