import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'admin',
            password: 'admin1234567',
            database: 'test',
            entities: [UserEntity],
            // synchronize: true,
        }),
    ],
})
export class DataLayerModule {}
