import { Module } from '@nestjs/common';
import { UserService } from './user/user.service';
import { UserRepositoryService } from '../data-layer/repositories/user-repository/user-repository.service';
import { UserEntity } from '../data-layer/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
    imports  : [ 
        TypeOrmModule.forFeature([UserEntity]),
    ],
    exports  : [UserService],
    providers: [UserService, UserRepositoryService],
})
export class BusinessLayerModule {}
