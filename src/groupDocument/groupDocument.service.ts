import { Injectable } from '@nestjs/common';
import {DocumentDto} from "../../domain/dto/DocumentDto";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';


@Injectable()
export class GroupDocumentService {
    constructor(@InjectModel('groupDocument') private readonly groupDocumentModel: Model<DocumentDto>) {}

    async create(document: DocumentDto){
        const createdCat = new this.groupDocumentModel(document);
        return createdCat.save();
    }

    async find(document: DocumentDto){
        return this.groupDocumentModel.find(document);
    }
}
