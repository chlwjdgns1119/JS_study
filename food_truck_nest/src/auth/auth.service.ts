import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SignupUserDto } from './dto/signup-user.dto';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';
import { UsersService } from 'src/users/users.service';
import { ENV_HASH_ROUNDS_KEY } from 'src/common/const/env-keys.const'
import { SignupEnum } from 'src/users/const/signup.const';
import { RolesEnum } from 'src/users/const/roles.const';
import { UsersModel } from 'src/users/entity/users.entity';

@Injectable()
export class AuthService {

    constructor(
        private readonly usersService: UsersService,
        private readonly configService: ConfigService,
    ){}

    async loginLocal(user: Pick<UsersModel, 'login_id' | 'password'>){
        const existingUser = await this.authenticateWithLocal(user);

        return existingUser;
    }

    async signupLocal(user: SignupUserDto){
        const hash = await bcrypt.hash(
            user.password,
            parseInt(this.configService.get<string>(ENV_HASH_ROUNDS_KEY)),
        );

        const newUser = await this.usersService.createUser({
            ...user,
            password: hash,
            role: RolesEnum.Consummer,
            signup_method: SignupEnum.Local
        });

        return newUser;
    }

    async authenticateWithLocal(user: Pick<UsersModel, 'login_id' | 'password'>){
        const existingUser = await this.usersService.getUsersByLoginid(user.login_id);

        if(!existingUser){
            throw new UnauthorizedException('존재하지 않는 사용자입니다.');
        }

        const pass = await bcrypt.compare(user.password, existingUser.password);

        if(!pass){
            throw new UnauthorizedException('비밀번호가 일치하지 않습니다.');
        }

        return existingUser;
    }
}
