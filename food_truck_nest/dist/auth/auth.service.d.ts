import { SignupUserDto } from './dto/signup-user.dto';
import { ConfigService } from '@nestjs/config';
import { UsersService } from 'src/users/users.service';
export declare class AuthService {
    private readonly usersService;
    private readonly configService;
    constructor(usersService: UsersService, configService: ConfigService);
    signupLocal(user: SignupUserDto): Promise<import("../users/entity/users.entity").UsersModel>;
}
