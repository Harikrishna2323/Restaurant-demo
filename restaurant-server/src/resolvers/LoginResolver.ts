import { Users } from './../entities/Users';
import * as jwt from "jsonwebtoken";
import * as bcrypt from "bcryptjs";
import { getRepository } from 'typeorm';
import { Response, Request } from 'express';

export const login = async (roots:any, args:any) =>{
    console.log(args);
    let email = args?.email;
    let password = args?.password;
    console.log(email, password)
    
    let encryptedPassword = ''; 
    //    bcrypt.hash(password, 10, function(err: Object, hash: string) {
    //         console.log(hash);
    //         encryptedPassword = hash
    //     });

    //     password = encryptedPassword
    
   

    let user = await getRepository(Users)
        .createQueryBuilder('user')
        .innerJoinAndSelect('user.role','ur')
        .where("(user.email = :email) and (user.password = :password)", {
            email:email,
            password: password
        }).getOne();

    if(user){
        console.log(user);
        let token  = jwt.sign(JSON.parse(JSON.stringify(user)), `${process.env.SERVER_SECRET}`, {
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
                message: "Something went wrong."
        }}
    }


}