import { registerAs } from "@nestjs/config";

export default registerAs('config',()=>{
    return {
        postgres: {
            // dbName: process.env.DATABASE_NAME,
            // port: parseInt(process.env.DATABASE_PORT),
            // password: process.env.DATABASE_PASSWORD,
            // username: process.env.DATABASE_USERNAME,
            // host: process.env.DATABASE_HOST,
            url: process.env.DATABASE_URL,
        }
    }
})