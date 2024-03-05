import userService from "../services/userService";
import {Request,Response} from 'express'
import {generateUploadUrl} from '../s3Bucket'

 class UserCotroller{
    async signup(req:Request,res:Response):Promise<void>{
        
        try {
            const {name,email,password} = req.body   
             
            await userService.signup(name,email,password)
            res.status(200).send("user Registered succesfully")
            
        } catch (error) {
            res.status(400).send("Somthing wrong")
        }
    }


    async uploadImg(_:Request,res:Response):Promise<void>{
        
        try {           
            const url =await generateUploadUrl()
            res.json({url})
            
        } catch (error) {
            res.status(400).send("Somthing wrong")
        }
    }
 }

 export default new UserCotroller()