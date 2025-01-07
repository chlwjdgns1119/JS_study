import { UsersModel } from './entity/users.entity';
import { Repository } from 'typeorm';
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: Repository<UsersModel>);
    createUser(user: Omit<UsersModel, 'id' | 'state' | 'createdat' | 'updatedat' | 'islock' | 'lastlogin'>): Promise<UsersModel>;
    getUsersByLoginid(login_id: string): Promise<UsersModel>;
}
