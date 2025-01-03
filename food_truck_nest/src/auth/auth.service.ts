import { Injectable } from '@nestjs/common';
import { SignupUserDto } from './dto/signup-user.dto';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';
import { UsersService } from 'src/users/users.service';
import { ENV_HASH_ROUNDS_KEY } from 'src/common/const/env-keys.const'
import { SignupEnum } from 'src/users/const/signup.const';

@Injectable()
export class AuthService {

    constructor(
        private readonly usersService: UsersService,
        private readonly configService: ConfigService,
    ){}

    async signupLocal(user: SignupUserDto){
        const hash = await bcrypt.hash(
            user.password,
            parseInt(this.configService.get<string>(ENV_HASH_ROUNDS_KEY)),
        );

        const newUser = await this.usersService.createUser({
            ...user,
            password: hash,
            signup_method: SignupEnum.Local
        });

        return this.usersService.createUser(newUser);
    }
}
