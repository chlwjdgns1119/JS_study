import { SignupUserDto } from './dto/signup-user.dto';
import { ConfigService } from '@nestjs/config';
import { UsersService } from 'src/users/users.service';
import { UsersModel } from 'src/users/entity/users.entity';
export declare class AuthService {
    private readonly usersService;
    private readonly configService;
    constructor(usersService: UsersService, configService: ConfigService);
    loginLocal(user: Pick<UsersModel, 'login_id' | 'password'>): Promise<UsersModel>;
    signupLocal(user: SignupUserDto): Promise<UsersModel>;
    authenticateWithLocal(user: Pick<UsersModel, 'login_id' | 'password'>): Promise<UsersModel>;
}
