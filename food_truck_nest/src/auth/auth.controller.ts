import { Body, Controller, Post, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupUserDto } from './dto/signup-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login/local')
  loginLocal(
    @Body('login_id') login_id: string,
    @Body('password') password: string,
  ){
    return this.authService.loginLocal({
      login_id, password
    })
  }

  @Post('signup/local')
  signupLocal(
    @Body() signupInfo: SignupUserDto
  ){
    return this.authService.signupLocal(signupInfo);
  }
}
