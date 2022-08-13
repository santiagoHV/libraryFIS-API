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
        },
        awsS3: {
            s3Bucket: process.env.AWS_S3_BUCKET,
            region: process.env.AWS_S3_REGION,
            accessKeyId: process.env.AWS_S3_ACCESS_KEY,
            secretAccessKey: process.env.AWS_S3_SECRET_KEY,
        }
    }
})