import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DocumentModule } from './document/document.module';
import { MongooseModule } from '@nestjs/mongoose';
import {Config} from "../config/local/Config";

@Module({
  imports: [DocumentModule, MongooseModule.forRoot(`mongodb://${Config.mongoUrl}/${Config.mongoDbName}`)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
