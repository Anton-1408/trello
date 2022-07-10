import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class SignUpBodyDto {
  @ApiProperty()
  @IsEmail()
  @Length(0, 254)
  email: string;

  @ApiProperty()
  @IsString()
  @Length(0, 254)
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(0, 254)
  name: string;
}

export class SignInBodyDto {
  @ApiProperty()
  @IsEmail()
  @Length(0, 254)
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @Length(0, 254)
  password: string;
}

export class AuthUserDto {
  id: number;
  token: string;
  email: string;
}

export class SignUpUserDto {
  email: string;
  password: string;
}
