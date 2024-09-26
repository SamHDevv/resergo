import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../../entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserRepositoryService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
    ) {}

    // Crear todos los métodos que tienen que ver con la base de datos. Crear, editar, eliminar, buscar, etc.

    create(user: UserEntity): Promise<UserEntity> {
        return this.userRepository.save(user);
    }

    // async update(id: number, user: UserEntity): Promise<UserEntity> {
    //     await this.userRepository.update(id, user);
    //     return this.userRepository.findOne(id);
    // }

    async remove(id: number): Promise<void> {
        await this.userRepository.delete(id);
    }

    async find(options?: any): Promise<UserEntity[]> {
        return this.userRepository.find(options);
    }
}
