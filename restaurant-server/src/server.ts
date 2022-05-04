
import express from "express";
require("dotenv").config();

import {createConnection} from "typeorm";
import { Dishes } from './entities/Dishes';
import { Users } from './entities/Users';
import { Orders } from './entities/Orders';

const app = express();
app.use(express.json());



const PORT = process.env.PORT;


function initDB(){
    return createConnection({
        type: "mysql",
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_SCHEMA,
        entities: [Users, Dishes, Orders],
        synchronize: false,
    })
}

initDB().then(() =>{
    app.listen(PORT, ()=> console.log(`App started in port ${PORT}`) )
})
