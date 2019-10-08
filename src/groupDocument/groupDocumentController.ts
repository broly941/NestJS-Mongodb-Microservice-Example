import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {ApiOperation, ApiOkResponse, ApiNotFoundResponse} from '@nestjs/swagger';
import {GroupDocumentDto} from "../../domain/dto/GroupDocumentDto";
import { Model } from 'mongoose';
import {GroupDocumentService} from "./groupDocument.service";

@Controller('groupDocument')
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
    async create(@Body() document: GroupDocumentDto): Promise<{}> {
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
    async find(@Body() document: GroupDocumentDto): Promise<{}> {
        return this.groupDocumentService.find(document)
    }

    @Get(':id')
    @ApiOperation({
        title: 'Find groupDocument by id',
        operationId: 'getGroupDocumentById',
    })
    @ApiOkResponse({
        description: 'Successfully find groupDocument',
    })
    @ApiNotFoundResponse({ description: 'GROUP_DOCUMENT' })
    async findById(@Param('id') id: number,): Promise<{}> {
        return this.groupDocumentService.findById(id)
    }
}
