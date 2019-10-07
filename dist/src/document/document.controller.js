"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const DocumentDto_1 = require("../../domain/dto/DocumentDto");
const document_service_1 = require("./document.service");
let DocumentController = class DocumentController {
    constructor(documentService) {
        this.documentService = documentService;
    }
    async create(document) {
        return this.documentService.create(document);
    }
    async find(document) {
        return this.documentService.find(document);
    }
};
__decorate([
    common_1.Post('add'),
    swagger_1.ApiOperation({
        title: 'Add document',
        operationId: 'addDocument',
    }),
    swagger_1.ApiOkResponse({
        description: 'Successfully add document',
    }),
    swagger_1.ApiNotFoundResponse({ description: 'DOCUMENT' }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [DocumentDto_1.DocumentDto]),
    __metadata("design:returntype", Promise)
], DocumentController.prototype, "create", null);
__decorate([
    common_1.Post('find'),
    swagger_1.ApiOperation({
        title: 'Find document',
        operationId: 'findDocument',
    }),
    swagger_1.ApiOkResponse({
        description: 'Successfully find document',
    }),
    swagger_1.ApiNotFoundResponse({ description: 'DOCUMENT' }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [DocumentDto_1.DocumentDto]),
    __metadata("design:returntype", Promise)
], DocumentController.prototype, "find", null);
DocumentController = __decorate([
    common_1.Controller('document'),
    __metadata("design:paramtypes", [document_service_1.DocumentService])
], DocumentController);
exports.DocumentController = DocumentController;
//# sourceMappingURL=document.controller.js.map