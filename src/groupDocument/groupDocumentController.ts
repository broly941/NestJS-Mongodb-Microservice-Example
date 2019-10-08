import {Body, Controller, Post} from '@nestjs/common';
import {ApiOperation, ApiOkResponse, ApiNotFoundResponse} from '@nestjs/swagger';
import {DocumentDto} from "../../domain/dto/DocumentDto";
import { Model } from 'mongoose';
import {GroupDocumentService} from "./groupDocument.service";

@Controller('document')
export class GroupDocumentController {

    constructor(private readonly groupDocumentService: GroupDocumentService) {}

    @Post('add')
    @ApiOperation({
        title: 'Add groupDocument',
        operationId: 'addGroupDocument',
    })
    @ApiOkResponse({
        description: 'Successfully add groupDocument',
    })
    @ApiNotFoundResponse({ description: 'GROUP_DOCUMENT' })
    async create(@Body() document: DocumentDto): Promise<{}> {
        return this.groupDocumentService.create(document)
    }

    @Post('find')
    @ApiOperation({
        title: 'Find groupDocument',
        operationId: 'findGroupDocument',
    })
    @ApiOkResponse({
        description: 'Successfully find groupDocument',
    })
    @ApiNotFoundResponse({ description: 'GROUP_DOCUMENT' })
    async find(@Body() document: DocumentDto): Promise<{}> {
        return this.groupDocumentService.find(document)
    }
}
