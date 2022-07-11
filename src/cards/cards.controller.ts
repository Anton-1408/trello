import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CardsService } from './cards.service';

@ApiTags('cards')
@Controller('cards')
export class CardsController {
  constructor(private cardsService: CardsService) {}

  @Post('createCard')
  createCard() {
    this.cardsService.createCard();
  }

  @Patch('updateCard')
  updateCard() {
    this.cardsService.updateCard();
  }

  @Get('getCardsByColumnId')
  getCardsByColumnId() {
    this.cardsService.getCardsByColumnId();
  }

  @Delete('deleteCard')
  deleteCard() {
    this.cardsService.deleteCard();
  }
}
