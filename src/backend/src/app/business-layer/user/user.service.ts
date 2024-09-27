import { Injectable } from '@nestjs/common';
import { UserRepositoryService } from '../../data-layer/repositories/user-repository/user-repository.service';
import { UserEntity } from '../../data-layer/entities/user.entity';

@Injectable()
export class UserService {
    constructor(private readonly userRepositoryService: UserRepositoryService) {}

    async findAll(): Promise<UserEntity[]> {
        return this.userRepositoryService.find();
    }
}
