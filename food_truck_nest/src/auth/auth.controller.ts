import { Body, Controller, Post, Get, Session, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupUserDto } from './dto/signup-user.dto';
import { Request } from 'express';
import { LocalAuthGuard } from './guard/local-auth.gaurd';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login/local')
  @UseGuards(LocalAuthGuard)
  loginLocal(
    @Body() body,
    @Session() session,
    @Req() req,
  ){
    console.log(session.id);
    console.log(session);
    console.log(req.user);

    return req.user;
  }

  @Post('signup/local')
  signupLocal(
    @Body() signupInfo: SignupUserDto
  ){
    return this.authService.signupLocal(signupInfo);
  }

  @Post('login/test')
  async loginTest(
    @Body('login_id') login_id: string,
    @Body('password') password: string, 
  ){
    const user = await this.authService.loginLocal({login_id, password});
    console.log(user);
    return user;
  }
}
