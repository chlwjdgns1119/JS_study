import { Body, Controller, Post, Get, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupUserDto } from './dto/signup-user.dto';
import { LocalAuthGuard } from './guard/local-auth.gaurd';
import { LoggedInGuard } from './guard/logged-in.guard';
import { User } from './decorator/auth.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // 로컬 로그인
  @Post('login/local')
  @UseGuards(LocalAuthGuard) // 로컬 guard 실행 후 인증되면 session 등록후 쿠키로 전달
  loginLocal(
    @User() user,
  ){
    return user;
  }

  // user정보 반환
  @Get('get/user')
  @UseGuards(LoggedInGuard) // loggedinGuard를 통해 sessionID를 통한 인증으로 접근 제공(user정보 전달)
  getUser(
    @Req() req,
  ){
    console.log(req.user);
    return req.user;
  }

  // 로컬 로그인
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
