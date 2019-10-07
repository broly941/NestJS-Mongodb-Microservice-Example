import {Body, Controller, Get, Post, Query} from '@nestjs/common';
import {ApiOperation, ApiOkResponse, ApiNotFoundResponse} from '@nestjs/swagger';
import {DocumentDto} from "../../domain/dto/DocumentDto";

@Controller('document')
export class DocumentController {

    @Post('list')
    @ApiOperation({
        title: 'Get user list',
        operationId: 'userList',
    })
    @ApiOkResponse({
        description: 'Successfully return list user',
    })
    @ApiNotFoundResponse({ description: 'USER' })
    async getList(@Body() user: DocumentDto): Promise<{}> {
        return "ok";
    }

}
