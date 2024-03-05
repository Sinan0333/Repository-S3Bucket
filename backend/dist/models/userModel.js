"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    is_Admin: {
        type: Boolean,
        default: false
    }
});
const UserModel = (0, mongoose_1.model)('User', userSchema);
exports.default = UserModel;
