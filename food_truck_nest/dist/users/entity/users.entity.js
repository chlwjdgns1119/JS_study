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
exports.UsersModel = void 0;
const typeorm_1 = require("typeorm");
const state_const_1 = require("../const/state.const");
const roles_const_1 = require("../const/roles.const");
const signup_const_1 = require("../const/signup.const");
let UsersModel = class UsersModel {
};
exports.UsersModel = UsersModel;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UsersModel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        unique: true,
        readonly: true
    }),
    __metadata("design:type", String)
], UsersModel.prototype, "nickname", void 0);
__decorate([
    (0, typeorm_1.Column)({
        unique: true,
        readonly: true
    }),
    __metadata("design:type", String)
], UsersModel.prototype, "login_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UsersModel.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true
    }),
    __metadata("design:type", Number)
], UsersModel.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true
    }),
    __metadata("design:type", String)
], UsersModel.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({
        enum: Object.values(state_const_1.StateEnum),
        default: state_const_1.StateEnum.Active,
    }),
    __metadata("design:type", String)
], UsersModel.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.Column)({
        enum: Object.values(roles_const_1.RolesEnum),
        readonly: true
    }),
    __metadata("design:type", String)
], UsersModel.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        readonly: true,
        type: 'timestamp'
    }),
    __metadata("design:type", Date)
], UsersModel.prototype, "createdat", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: 'timestamp'
    }),
    __metadata("design:type", Date)
], UsersModel.prototype, "updatedat", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], UsersModel.prototype, "lastlogin", void 0);
__decorate([
    (0, typeorm_1.Column)({
        default: false
    }),
    __metadata("design:type", Boolean)
], UsersModel.prototype, "islock", void 0);
__decorate([
    (0, typeorm_1.Column)({
        enum: Object.values(signup_const_1.SignupEnum)
    }),
    __metadata("design:type", String)
], UsersModel.prototype, "signup_method", void 0);
exports.UsersModel = UsersModel = __decorate([
    (0, typeorm_1.Entity)()
], UsersModel);
//# sourceMappingURL=users.entity.js.map