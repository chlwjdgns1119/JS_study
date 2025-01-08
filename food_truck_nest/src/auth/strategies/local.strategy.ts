import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from 'passport-local';
import { AuthService } from "../auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
    constructor(
        private readonly authService: AuthService,
    ){
        // strategy에 넘겨줄 옵션, login_id와 password라는 프로퍼티를 body로부터 찾고 validate의 파라미터로 넘겨줌.
        super({
            usernameField: 'login_id',
            passwordField: 'password',
        })
    }

    // AuthGuard에서 호출 시 인증 역할을 맡음. 이 때 passport.authenticate()가 실행되는데 그러면 validate가 호출됨. validate는 return의 정보를 req.user에 담아준다. 그러면 ture를
    // AuthGuard에서 반환하고 아니면 false를 반환함.
    async validate(login_id: string, password: string){
        const user = await this.authService.loginLocal({login_id, password});
        
        if(!user)
            throw new UnauthorizedException('로그인 정보를 확인할 수 없습니다.')

        return user; // req.user에 이 반환된 정보가 저장됨.
    }
}