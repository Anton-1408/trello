import {
  Body,
  Controller,
  Post,
  Delete,
  Param,
  Get,
  Patch,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateCommentBodyDto } from './comments.dto';
import { CommentsService } from './comments.service';

@ApiTags('comments')
@Controller('comments')
export class CommentsController {
  constructor(private commentsService: CommentsService) {}

  @Post('createComment')
  createComment(@Body() createCommentDto: CreateCommentBodyDto) {
    this.commentsService.createComment();
  }

  @Delete(':id')
  deleteComment(@Param('id') commentId: number) {
    this.commentsService.deleteComment();
  }

  @Get('getCommentsByCardId')
  getCommentsByCardId(@Param('cardId') cardId: number) {
    this.commentsService.getCommentsByCardId();
  }

  @Patch('updateComment')
  updateComment(@Param('id') id: number) {
    this.commentsService.updateComment();
  }
}
