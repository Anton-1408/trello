import { Controller, Delete, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { UserDto, UserDeleteResponse, UserResponse } from './users.dto';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get(':id')
  @ApiOkResponse({ type: UserResponse })
  getCurrentUser(@Param('id') params: UserDto): void {
    this.usersService.getCurrentUser(params.id);
  }

  @Get('getAllUsers')
  @ApiOkResponse({ type: [UserDeleteResponse] })
  getAllUsers(): void {
    this.usersService.getAllUsers();
  }

  @Delete(':id')
  @ApiOkResponse({ type: UserDeleteResponse })
  deleteUser(@Param('id') params: UserDto): void {
    this.usersService.deleteUser(params.id);
  }
}
