import { Module } from '@nestjs/common';
import { GroupDocumentController } from './groupDocumentController';
import { GroupDocumentService } from './groupDocument.service';
import { MongooseModule } from '@nestjs/mongoose';
import {GroupDocumentSchema} from "../../domain/schema/GroupDocumentSchema";

@Module({
  imports: [MongooseModule.forFeature([{ name: 'groupDocument', schema: GroupDocumentSchema }])],
  controllers: [GroupDocumentController],
  providers: [GroupDocumentService]
})
export class GroupDocumentModule {}
