import { registerAs } from "@nestjs/config";

export default registerAs('config',()=>{
    return {
        postgres: {
            name: process.env.DATABASE_NAME,
            port: process.env.DATABASE_PORT,
            password: process.env.DATABASE_PASSWORD,
            username: process.env.DATABASE_USERNAME,
            host: process.env.DATABASE_HOST,
        }
    }
})