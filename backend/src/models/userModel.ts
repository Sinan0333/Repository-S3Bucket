import { model ,Document,Schema } from 'mongoose'

export interface User extends Document{
    name:string
    email:string
    password:string 
    is_Admin:boolean
}

const userSchema = new Schema <User>({
    name:{
        type:String,
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    is_Admin:{
        type:Boolean,
        default:false
    }
})

const UserModel = model<User>('User',userSchema)


export default UserModel
