import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class LoggedInGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    // isAuthenticated로 인증되어 있는지 확인. isAuthenticated는 passport가 자동으로 붙여준 헬퍼 메소드로 메소드 실행을 통해 session을 이용해 인증여부 확인.
    return request.isAuthenticated();
  }
}