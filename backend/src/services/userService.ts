import userRepositories from "../repositories/userRepositories";


class UserService{
    async signup (name:string,email:string,password:string):Promise<void>{

        await userRepositories.createUser(name,email,password)
        
    }
}

export default new UserService()