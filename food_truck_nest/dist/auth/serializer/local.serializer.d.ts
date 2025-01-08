import { PassportSerializer } from "@nestjs/passport";
import { UsersModel } from "src/users/entity/users.entity";
import { Repository } from 'typeorm';
export declare class LocalSerializer extends PassportSerializer {
    private readonly usersRepository;
    constructor(usersRepository: Repository<UsersModel>);
    serializeUser(user: any, done: Function): void;
    deserializeUser(id: number, done: Function): Promise<void>;
}
