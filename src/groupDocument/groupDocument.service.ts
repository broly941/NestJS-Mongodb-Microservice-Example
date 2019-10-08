import { Injectable } from '@nestjs/common';
import {GroupDocumentDto} from "../../domain/dto/GroupDocumentDto";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';


@Injectable()
export class GroupDocumentService {
    constructor(@InjectModel('groupDocument') private readonly groupDocumentModel: Model<GroupDocumentDto>) {}

    async create(document: GroupDocumentDto){
        const createdCat = new this.groupDocumentModel(document);
        return createdCat.save();
    }

    async find(document: GroupDocumentDto){
        return this.groupDocumentModel.find(document);
    }

    async findById(id: number){
        return this.groupDocumentModel.findOne({id});
    }
}
