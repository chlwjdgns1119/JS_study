"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const config_1 = require("@nestjs/config");
const users_service_1 = require("../users/users.service");
const env_keys_const_1 = require("../common/const/env-keys.const");
const signup_const_1 = require("../users/const/signup.const");
const roles_const_1 = require("../users/const/roles.const");
let AuthService = class AuthService {
    constructor(usersService, configService) {
        this.usersService = usersService;
        this.configService = configService;
    }
    async signupLocal(user) {
        const hash = await bcrypt.hash(user.password, parseInt(this.configService.get(env_keys_const_1.ENV_HASH_ROUNDS_KEY)));
        const newUser = await this.usersService.createUser({
            ...user,
            password: hash,
            role: roles_const_1.RolesEnum.Consummer,
            signup_method: signup_const_1.SignupEnum.Local
        });
        return this.usersService.createUser(newUser);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        config_1.ConfigService])
], AuthService);
//# sourceMappingURL=auth.service.js.map