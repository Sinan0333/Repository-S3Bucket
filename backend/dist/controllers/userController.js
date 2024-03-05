"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userService_1 = __importDefault(require("../services/userService"));
const s3Bucket_1 = require("../s3Bucket");
class UserCotroller {
    signup(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, email, password } = req.body;
                yield userService_1.default.signup(name, email, password);
                res.status(200).send("user Registered succesfully");
            }
            catch (error) {
                res.status(400).send("Somthing wrong");
            }
        });
    }
    uploadImg(_, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log('in upload image');
                const url = yield (0, s3Bucket_1.generateUploadUrl)();
                res.json({ url });
            }
            catch (error) {
                res.status(400).send("Somthing wrong");
            }
        });
    }
}
exports.default = new UserCotroller();
