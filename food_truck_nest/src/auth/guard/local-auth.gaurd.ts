import { Injectable, ExecutionContext } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class LocalAuthGuard extends AuthGuard('local'){
    async canActivate(context: ExecutionContext): Promise<boolean>{

        const activate = (await super.canActivate(context)) as boolean;

        if(activate){
            const request = context.switchToHttp().getRequest();
            await super.logIn(request);
        }

        return activate;
    }
}