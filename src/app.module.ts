import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DocumentModule } from './document/document.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [DocumentModule, MongooseModule.forRoot('mongodb://localhost/navigatorDb')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
