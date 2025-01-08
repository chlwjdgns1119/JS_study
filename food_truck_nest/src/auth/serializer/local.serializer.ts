import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportSerializer } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import { UsersModel } from "src/users/entity/users.entity";
import { Repository } from 'typeorm'

@Injectable()
export class LocalSerializer extends PassportSerializer{
    constructor(
        @InjectRepository(UsersModel)
        private readonly usersRepository: Repository<UsersModel>
    ){
        super()
    }

    serializeUser(user: any, done: Function) {
        done(null, user.id)
    }

    async deserializeUser(id: number, done: Function) {
        try {
            const user = await this.usersRepository.findOneOrFail({ where: { id } });
            done(null, user);
        }catch(err){
            done(new UnauthorizedException('해당 sessionID에 해당하는 정보가 존재하지 않습니다. 재로그인 해주십시오.'));
        }
    }
}