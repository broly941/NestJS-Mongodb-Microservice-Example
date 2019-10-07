import { Module } from '@nestjs/common';
import { DocumentController } from './document.controller';
import { DocumentService } from './document.service';
import { MongooseModule } from '@nestjs/mongoose';
import {DocumentSchema} from "../../domain/schema/DocumentSchema";

@Module({
  imports: [MongooseModule.forFeature([{ name: 'document', schema: DocumentSchema }])],
  controllers: [DocumentController],
  providers: [DocumentService]
})
export class DocumentModule {}
