import { Injectable, ExecutionContext } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class LocalAuthGuard extends AuthGuard('local'){
    // extends했으니 canActivate 메소드 실행
    async canActivate(context: ExecutionContext): Promise<boolean>{ // context는 자동으로 알아서 파라미터 전달됨.

        // super를 통해서 canActivate 실행, 'local' 이름의 strategy 실행 및 passport.authenticate() 실행.
        const activate = (await super.canActivate(context)) as boolean;

        if(activate){
            const request = context.switchToHttp().getRequest();
            // logIn을 통해서 passport.session()의 serializeUser 호출.
            await super.logIn(request);
        }

        return activate;
    }
}