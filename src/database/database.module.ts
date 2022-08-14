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
                    synchronize: false,
                    autoLoadEntities: true,
                    ssl: {
                        rejectUnauthorized: false,
                    }
                }
            }
        })
    ],
    providers:[],
    exports: [TypeOrmModule]
})
export class DatabaseModule {}
