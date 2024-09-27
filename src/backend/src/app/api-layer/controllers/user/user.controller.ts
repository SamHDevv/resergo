import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { UserService } from '../../../business-layer/user/user.service';
import { IUserResponse } from '../../dto/user/user-response.interface';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) {}

    @Get('/find-all')
    @HttpCode(HttpStatus.OK)
    async findAll(): Promise<IUserResponse[]> {
        const users = await this.userService.findAll();
        const response = users.map(user => ({
            id   : user.id,
            name : user.name,
            email: user.email,
            phone: user.phone
        }));
        return response
    }

}
