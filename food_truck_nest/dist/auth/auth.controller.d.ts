import { AuthService } from './auth.service';
import { SignupUserDto } from './dto/signup-user.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    loginLocal(body: any, session: any, req: any): any;
    signupLocal(signupInfo: SignupUserDto): Promise<import("../users/entity/users.entity").UsersModel>;
    loginTest(login_id: string, password: string): Promise<import("../users/entity/users.entity").UsersModel>;
}
