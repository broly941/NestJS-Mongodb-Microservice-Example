import { Injectable } from '@nestjs/common';
import {DocumentDto} from "../../domain/dto/DocumentDto";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';


@Injectable()
export class DocumentService {
    constructor(@InjectModel('document') private readonly documentModel: Model<DocumentDto>) {}

    async create(document: DocumentDto){
        const createdCat = new this.documentModel(document);
        return createdCat.save();
    }

    async find(document: DocumentDto){
        return this.documentModel.find(document);
    }
}
