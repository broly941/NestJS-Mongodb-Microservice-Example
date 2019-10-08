import { ApiModelProperty } from '@nestjs/swagger';
import {IsNotEmpty, IsNumber, IsOptional, IsString} from 'class-validator';
import {DocumentDto} from "./DocumentDto";

export class GroupDocumentDto {

    @IsString()
    @IsOptional()
    @ApiModelProperty({ type: String, required: true })
    readonly id: string;

    @IsString()
    @IsOptional()
    @ApiModelProperty({ type: String, required: true })
    readonly name: string;

    @IsNumber()
    @IsOptional()
    @ApiModelProperty({ type: String, required: true })
    readonly objectId: string;

    @IsOptional()
    @ApiModelProperty({ type: DocumentDto, required: true })
    readonly documents: DocumentDto;
}
