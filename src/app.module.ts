import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GroupDocumentModule } from './groupDocument/groupDocument.module';
import { MongooseModule } from '@nestjs/mongoose';
import { env } from '../config/current/env';

@Module({
  imports: [GroupDocumentModule, MongooseModule.forRoot(`mongodb://${env.DB_URL}/${env.DB_NAME}`)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
