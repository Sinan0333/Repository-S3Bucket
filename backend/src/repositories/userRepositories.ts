import UserModel,{User} from "../models/userModel";

class UserRepository{

    async createUser(name:string,email:string,password:string):Promise<User>{   
        const user = new  UserModel({name,email,password})
        return await user.save()
        
    }
}

export default new UserRepository()