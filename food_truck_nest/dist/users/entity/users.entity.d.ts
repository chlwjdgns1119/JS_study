import { StateEnum } from '../const/state.const';
import { RolesEnum } from '../const/roles.const';
import { SignupEnum } from '../const/signup.const';
export declare class UsersModel {
    id: number;
    nickname: string;
    login_id: string;
    password: string;
    phone: number;
    state: StateEnum;
    role: RolesEnum;
    createdat: Date;
    updatedat: Date;
    lastlogin: Date;
    islock: boolean;
    signup_method: SignupEnum;
}
