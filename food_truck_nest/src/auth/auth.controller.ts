import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupUserDto } from './dto/signup-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('singup/local')
  signupLocal(
    @Body() signupInfo: SignupUserDto
  ){
    return this.authService.signupLocal(signupInfo);
  }
}
