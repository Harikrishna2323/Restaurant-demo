import { Image } from './entities/Image';
import { UserRoles } from './entities/UserRoles';
import express from "express";
require("dotenv").config();

import {createConnection} from "typeorm";
import { Dishes } from './entities/Dishes';
import { Users } from './entities/Users';
import { Orders } from './entities/Orders';

const app = express();
app.use(express.json());



const PORT = process.env.PORT;


async function initDB(){

    return await createConnection({
        type: "mysql",
        host: process.env.DB_HOST,
        port: 3306,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_SCHEMA,
        entities: [Users, Dishes, Orders, UserRoles, Image],
        synchronize: false,
        logging: !!process.env.LOG_TYPEORM,
    })
}
// DB_HOST=localhost
// DB_PORT=3306
// DB_USER=root
// DB_PASSWORD=hari1234
// DB_SCHEMA=restaurant
// LOG_TYPEORM=true

initDB().then(()=> app.listen(PORT, () => console.log(`Server started on port: ${PORT}`)));


