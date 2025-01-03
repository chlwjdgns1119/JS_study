import { UsersModel } from "src/users/entity/users.entity";
declare const SignupUserDto_base: import("@nestjs/mapped-types").MappedType<Omit<UsersModel, "id" | "state" | "createdat" | "updatedat" | "lastlogin" | "islock" | "signup_method">>;
export declare class SignupUserDto extends SignupUserDto_base {
}
export {};
