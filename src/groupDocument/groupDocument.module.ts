import { Module } from '@nestjs/common';
import { GroupDocumentController } from './groupDocumentController';
import { GroupDocumentService } from './groupDocument.service';
import { MongooseModule } from '@nestjs/mongoose';
import {DocumentSchema} from "../../domain/schema/DocumentSchema";

@Module({
  imports: [MongooseModule.forFeature([{ name: 'groupDocument', schema: DocumentSchema }])],
  controllers: [GroupDocumentController],
  providers: [GroupDocumentService]
})
export class GroupDocumentModule {}
