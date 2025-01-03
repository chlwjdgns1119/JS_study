import { AuthService } from './auth.service';
import { SignupUserDto } from './dto/signup-user.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signupLocal(signupInfo: SignupUserDto): Promise<import("../users/entity/users.entity").UsersModel>;
}
