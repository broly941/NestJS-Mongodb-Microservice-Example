import { DocumentDto } from "../../domain/dto/DocumentDto";
import { Model } from 'mongoose';
export declare class DocumentService {
    private readonly documentModel;
    constructor(documentModel: Model<DocumentDto>);
    create(document: DocumentDto): Promise<any>;
    find(document: DocumentDto): Promise<any>;
}
