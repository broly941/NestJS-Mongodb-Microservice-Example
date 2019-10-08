import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GroupDocumentModule } from './groupDocument/groupDocument.module';
import { MongooseModule } from '@nestjs/mongoose';
import {Config} from "../config/local/Config";

@Module({
  imports: [GroupDocumentModule, MongooseModule.forRoot(`mongodb://${Config.mongoUrl}/${Config.mongoDbName}`)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
