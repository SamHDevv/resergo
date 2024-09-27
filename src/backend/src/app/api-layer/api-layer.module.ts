import { Module } from '@nestjs/common';
import { UserController } from './controllers/user/user.controller';
import { BusinessLayerModule } from '../business-layer/business-layer.module';

@Module({
  imports: [BusinessLayerModule],
  controllers: [UserController]
})
export class ApiLayerModule {}
