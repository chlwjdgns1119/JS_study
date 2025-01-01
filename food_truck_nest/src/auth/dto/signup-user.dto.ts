import { OmitType } from "@nestjs/mapped-types";
import { UsersModel } from "src/users/entity/users.entity";

export class SignupUserDto extends OmitType(UsersModel, ['id', 'state', 'createdat', 'updatedat', 'lastlogin', 'islock', 'signup_method']){}