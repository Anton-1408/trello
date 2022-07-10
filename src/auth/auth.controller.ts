import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import {
  SignUpBodyDto,
  SignInBodyDto,
  AuthUserDto,
  SignUpUserDto,
} from './auth-user.dto';
import { AuthService } from './auth.service';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signIn')
  @ApiBody({ type: SignInBodyDto })
  @ApiOkResponse({ type: AuthUserDto })
  signIn(@Body() signInUserDto: SignInBodyDto): void {
    this.authService.signIn(signInUserDto);
  }

  @Post('signOut')
  signOut(): void {
    this.authService.signOut();
  }

  @Post('signUp')
  @ApiBody({ type: SignUpBodyDto })
  @ApiOkResponse({ type: SignUpUserDto })
  signUp(@Body() signUpUserDto: SignUpBodyDto): void {
    this.authService.signUp(signUpUserDto);
  }
}
