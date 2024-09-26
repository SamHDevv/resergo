import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataLayerModule } from './app/data-layer/data-layer.module';

@Module({
  imports: [DataLayerModule],
  controllers: [AppController],
  providers: [
    AppService
  ],
})
export class AppModule {}
