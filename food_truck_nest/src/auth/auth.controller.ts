import { Body, Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupUserDto } from './dto/signup-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('singup/local')
  signupLocal(
    @Body() body: SignupUserDto
  ){
    return this.
  }
}
