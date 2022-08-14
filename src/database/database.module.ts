import { Module, Global } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'src/config';

@Global()
@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            inject: [config.KEY],
            useFactory: (configService: ConfigType<typeof config>) => {
                const { url } = configService.postgres
                console.log(configService.postgres)
                return{
                    type: 'postgres',
                    url: url,
                    // host: host,
                    // port: port,
                    // username: username,
                    // password: password,
                    // database: dbName,
                    synchronize: false,
                    autoLoadEntities: true,
                    
                }
            }
        })
    ],
    providers:[],
    exports: [TypeOrmModule]
})
export class DatabaseModule {}
