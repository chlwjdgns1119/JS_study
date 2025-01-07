import { AuthService } from './auth.service';
import { SignupUserDto } from './dto/signup-user.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    loginLocal(body: any, session: any): any;
    signupLocal(signupInfo: SignupUserDto): Promise<import("../users/entity/users.entity").UsersModel>;
}
