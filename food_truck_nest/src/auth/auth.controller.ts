import { Body, Controller, Post, Get, Session, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupUserDto } from './dto/signup-user.dto';
import { Request } from 'express';
import { userInfo } from 'os';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}


  @Post('login/local')
  loginLocal(
    @Body() body,
    @Session() session,
  ){
    console.log(session.id);
    console.log(session);
    console.log(body.user);

    return body.user;
  }

  @Post('signup/local')
  signupLocal(
    @Body() signupInfo: SignupUserDto
  ){
    return this.authService.signupLocal(signupInfo);
  }
}
