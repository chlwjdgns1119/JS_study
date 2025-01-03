"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignupUserDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const users_entity_1 = require("../../users/entity/users.entity");
class SignupUserDto extends (0, mapped_types_1.OmitType)(users_entity_1.UsersModel, ['id', 'state', 'createdat', 'updatedat', 'lastlogin', 'islock', 'signup_method']) {
}
exports.SignupUserDto = SignupUserDto;
//# sourceMappingURL=signup-user.dto.js.map