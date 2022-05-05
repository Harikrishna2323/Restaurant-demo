import { Dishes } from './../entities/Dishes';

import * as jwt from "jsonwebtoken";
import * as bcrypt from "bcryptjs";
import { getRepository } from 'typeorm';

export const getDishes = async (roots:any, args:any) =>{
    let id = args?.id;
    let title = args?.title;
    let category = args?.category;
    console.log(id)

    let dishes = await getRepository(Dishes)
        .createQueryBuilder('dishes')
        .where("dishes.id = :id AND dishes.title = :title",{id: id, title:title})
        .getMany();


        if(dishes){
            return {
                dishes,
                metadata:{
                    success: true,
                    message: "List of "+ dishes.length + " dishes ."
                }
            }
        }else{
            return{
                metadata:{
                    success: false,
                    message: "Failed to load dishes list."
                }
            }
        }
        
}

