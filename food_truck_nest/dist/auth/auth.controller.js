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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const signup_user_dto_1 = require("./dto/signup-user.dto");
const local_auth_gaurd_1 = require("./guard/local-auth.gaurd");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    loginLocal(body, session, req) {
        console.log(session.id);
        console.log(session);
        console.log(req.user);
        return req.user;
    }
    signupLocal(signupInfo) {
        return this.authService.signupLocal(signupInfo);
    }
    async loginTest(login_id, password) {
        const user = await this.authService.loginLocal({ login_id, password });
        console.log(user);
        return user;
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.UseGuards)(local_auth_gaurd_1.LocalAuthGuard),
    (0, common_1.Post)('login/local'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Session)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "loginLocal", null);
__decorate([
    (0, common_1.Post)('signup/local'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [signup_user_dto_1.SignupUserDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "signupLocal", null);
__decorate([
    (0, common_1.Post)('login/test'),
    __param(0, (0, common_1.Body)('login_id')),
    __param(1, (0, common_1.Body)('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "loginTest", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map