import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from 'passport-local';
import { AuthService } from "../auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
    constructor(
        private readonly authService: AuthService,
    ){
        super({
            usernameField: 'login_id',
            passwordField: 'password',
        })
    }

    async validate(login_id: string, password: string){
        const user = this.authService.loginLocal({login_id, password});
        
        if(!user)
            throw new UnauthorizedException('로그인 정보를 확인할 수 없습니다.')

        return user;
    }
}