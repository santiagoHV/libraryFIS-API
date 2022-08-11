import { Module, Global } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'src/config';

@Global()
@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            inject: [config],
            useFactory: (configService: ConfigType<typeof config>) => {
                const { username, name, password, port, host } = configService.postgres
                return{
                    type: 'postgres',
                    host: host,
                    port: port,
                    username: username,
                    password: password,
                    synchronize: false,
                    autoLoadEntities: true,
                }
            }
        })
    ],
    providers:[

    ]
})
export class DatabaseModule {}
