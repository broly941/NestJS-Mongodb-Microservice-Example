import { DocumentDto } from "../../domain/dto/DocumentDto";
import { DocumentService } from "./document.service";
export declare class DocumentController {
    private readonly documentService;
    constructor(documentService: DocumentService);
    create(document: DocumentDto): Promise<{}>;
    find(document: DocumentDto): Promise<{}>;
}
