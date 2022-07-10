import { ApiProperty } from '@nestjs/swagger';
import { IsNumberString } from 'class-validator';

export class UserDto {
  @ApiProperty()
  @IsNumberString()
  id: number;
}

export class UserDeleteResponse {
  count: number;
  success: boolean;
}

export class UserResponse {
  id: string;
  name: string;
  email: string;
  toke: string;
}
