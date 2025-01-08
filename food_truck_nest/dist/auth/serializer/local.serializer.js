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
exports.LocalSerializer = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const typeorm_1 = require("@nestjs/typeorm");
const users_entity_1 = require("../../users/entity/users.entity");
const typeorm_2 = require("typeorm");
let LocalSerializer = class LocalSerializer extends passport_1.PassportSerializer {
    constructor(usersRepository) {
        super();
        this.usersRepository = usersRepository;
    }
    serializeUser(user, done) {
        done(null, user.id);
    }
    async deserializeUser(id, done) {
        try {
            const user = await this.usersRepository.findOneOrFail({ where: { id } });
            done(null, user);
        }
        catch (err) {
            done(new common_1.UnauthorizedException('해당 sessionID에 해당하는 정보가 존재하지 않습니다. 재로그인 해주십시오.'));
        }
    }
};
exports.LocalSerializer = LocalSerializer;
exports.LocalSerializer = LocalSerializer = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(users_entity_1.UsersModel)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], LocalSerializer);
//# sourceMappingURL=local.serializer.js.map