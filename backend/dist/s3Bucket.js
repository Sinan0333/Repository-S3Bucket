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
exports.generateUploadUrl = void 0;
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const dotenv_1 = __importDefault(require("dotenv"));
const crypto_1 = __importDefault(require("crypto"));
const util_1 = require("util");
const randomBytes = (0, util_1.promisify)(crypto_1.default.randomBytes);
dotenv_1.default.config();
const region = "ap-south-1";
const bucketName = "mediheal-bucket";
const accessKeyId = process.env.ACCES_KEY || "";
const secretAccessKey = process.env.SECRET_KEY || "";
const s3 = new aws_sdk_1.default.S3({
    region,
    accessKeyId,
    secretAccessKey,
    signatureVersion: 'v4'
});
function generateUploadUrl() {
    return __awaiter(this, void 0, void 0, function* () {
        const rawBytes = yield randomBytes(16);
        const imageName = rawBytes.toString('hex');
        const params = ({
            Bucket: bucketName,
            Key: imageName,
            Expires: 60
        });
        const uploadUrl = yield s3.getSignedUrlPromise('putObject', params);
        return uploadUrl;
    });
}
exports.generateUploadUrl = generateUploadUrl;
