import {Body, Controller, Get, Post, Query} from '@nestjs/common';
import {ApiOperation, ApiOkResponse, ApiNotFoundResponse} from '@nestjs/swagger';
import {DocumentDto} from "../../domain/dto/DocumentDto";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {DocumentService} from "./document.service";

@Controller('document')
export class DocumentController {

    constructor(private readonly documentService: DocumentService) {}

    @Post('add')
    @ApiOperation({
        title: 'Add document',
        operationId: 'addDocument',
    })
    @ApiOkResponse({
        description: 'Successfully add document',
    })
    @ApiNotFoundResponse({ description: 'DOCUMENT' })
    async create(@Body() document: DocumentDto): Promise<{}> {
        return this.documentService.create(document)
    }

    @Post('find')
    @ApiOperation({
        title: 'Find document',
        operationId: 'findDocument',
    })
    @ApiOkResponse({
        description: 'Successfully find document',
    })
    @ApiNotFoundResponse({ description: 'DOCUMENT' })
    async find(@Body() document: DocumentDto): Promise<{}> {
        return this.documentService.find(document)
    }

}
