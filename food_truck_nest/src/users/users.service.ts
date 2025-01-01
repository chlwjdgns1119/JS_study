import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersModel } from './entity/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UsersModel)
        private readonly usersRepository: Repository<UsersModel>,
    ){}

    async createUser(user: Omit<UsersModel, 'id' | 'state' | 'createdat' | 'updatedat' | 'islock' | 'lastlogin'>){
        const nicknameExists = await this.usersRepository.exists({
            where: {
                nickname: user.nickname,
            }
        });

        if(nicknameExists){
            throw new BadRequestException('이미 존재하는 닉네임입니다.');
        }

        const loginIdExists = await this.usersRepository.exists({
            where: {
                email: user.login_id,
            }
        });

        if(loginIdExists){
            throw new BadRequestException('이미 존재하는 아이디입니다.');
        }

        const userObject = this.usersRepository.create({
            nickname: user.nickname,
            login_id: user.login_id,
            password: user.password,
            phone: user.phone,
            email: user.email,
            role: user.role,
            lastlogin: new Date(),
            signup_method: user.signup_method,
        })

        const newUser = await this.usersRepository.save(userObject);

        return newUser;
    }
}
