import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign_in.dto';
import { ApiResponse } from '@nestjs/swagger';
import { UserWithTokenDto } from './dto/user-with-token.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @ApiResponse({
    status: 200,
    type: UserWithTokenDto,
    description: 'User signed in',
  })
  @Post('sign-in')
  signIn(@Body() dto: SignInDto) {
    return this.service.signIn(dto);
  }
}
