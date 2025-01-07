"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setUpSession = setUpSession;
const config_1 = require("@nestjs/config");
const session = require("express-session");
const passport = require("passport");
function setUpSession(app) {
    const configService = app.get(config_1.ConfigService);
    app.use(session({
        secret: configService.get('SESSION_SECRET'),
        saveUninitialized: false,
        resave: false,
        cookie: {
            httpOnly: true,
            secure: false,
            maxAge: 1000 * 60 * 30,
            path: '/',
        },
    }));
    app.use(passport.initialize());
    app.use(passport.session());
}
//# sourceMappingURL=init-session.js.map