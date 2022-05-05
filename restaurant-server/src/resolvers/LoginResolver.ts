import { Users } from './../entities/Users';
import * as jwt from "jsonwebtoken";
import * as bcrypt from 'bcrypt';

export const login = async (args: any) =>{
    let {email, password} = args;
    let encryptedPassword = '';

    if(process.env.SERVER_SECRET){
        
        await bcrypt.hash(password, 10, function(err: Object, hash: string) {
            console.log(hash);
            encryptedPassword = hash
        });
    
    }

    let user = await Users.createQueryBuilder('users')
        .innerJoinAndSelect('user.role','ur')
        .where(`(email = :email) and (password= :password or ${encryptedPassword} = :password `, {
            email: email,
            password: password
        }).getOne();

    if(user){
        console.log(user);
        let token  = jwt.sign(JSON.parse(JSON.stringify(user)), process.env.SERVER_SECRET, {
            expiresIn: "10d"
        })

        return {
            user,
            token,
            metadata:{
                success: true,
                message: "Login was successful."
            }
            
        }

    }else{
        return {
            metadata:{
                success: false,
                message: "Somethinf went wrong."
        }}
    }


}