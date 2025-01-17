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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const users_entity_1 = require("./entity/users.entity");
const typeorm_2 = require("typeorm");
let UsersService = class UsersService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async createUser(user) {
        const nicknameExists = await this.usersRepository.exists({
            where: {
                nickname: user.nickname,
            }
        });
        if (nicknameExists) {
            throw new common_1.BadRequestException('이미 존재하는 닉네임입니다.');
        }
        const loginIdExists = await this.usersRepository.exists({
            where: {
                email: user.login_id,
            }
        });
        if (loginIdExists) {
            throw new common_1.BadRequestException('이미 존재하는 아이디입니다.');
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
        });
        const newUser = await this.usersRepository.save(userObject);
        return newUser;
    }
    async getUsersByLoginid(login_id) {
        return this.usersRepository.findOne({
            where: {
                login_id,
            }
        });
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(users_entity_1.UsersModel)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
//# sourceMappingURL=users.service.js.map