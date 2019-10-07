"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const document_controller_1 = require("./document.controller");
const document_service_1 = require("./document.service");
const mongoose_1 = require("@nestjs/mongoose");
const DocumentSchema_1 = require("../../domain/schema/DocumentSchema");
let DocumentModule = class DocumentModule {
};
DocumentModule = __decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'document', schema: DocumentSchema_1.DocumentSchema }])],
        controllers: [document_controller_1.DocumentController],
        providers: [document_service_1.DocumentService]
    })
], DocumentModule);
exports.DocumentModule = DocumentModule;
//# sourceMappingURL=document.module.js.map