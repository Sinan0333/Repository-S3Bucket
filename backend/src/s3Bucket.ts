import aws from 'aws-sdk';
import dotenv from 'dotenv';
import crypto from 'crypto'
import {promisify} from "util"
const randomBytes = promisify(crypto.randomBytes)


dotenv.config();

const region: string = "ap-south-1";
const bucketName: string = "mediheal-bucket";
const accessKeyId: string = process.env.ACCES_KEY || "";
const secretAccessKey: string = process.env.SECRET_KEY || "";

const s3 = new aws.S3({
    region,
    accessKeyId,
    secretAccessKey,
    signatureVersion: 'v4'
});

export async function generateUploadUrl(){
    const rawBytes = await randomBytes(16)
    const imageName = rawBytes.toString('hex')

    const params = {
        Bucket:bucketName,
        Key:imageName,
        Expires:60
    }

    const uploadUrl = await s3.getSignedUrlPromise('putObject',params)
    return uploadUrl
}