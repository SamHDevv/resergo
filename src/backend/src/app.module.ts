import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataLayerModule } from './app/data-layer/data-layer.module';
import { BusinessLayerModule } from './app/business-layer/business-layer.module';
import { ApiLayerModule } from './app/api-layer/api-layer.module';

@Module({
  imports: [DataLayerModule, BusinessLayerModule, ApiLayerModule],
  controllers: [AppController],
  providers: [
    AppService
  ],
})
export class AppModule {}
