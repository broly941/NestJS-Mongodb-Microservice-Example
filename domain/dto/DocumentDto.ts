import { ApiModelProperty } from '@nestjs/swagger';
import {IsNotEmpty, IsOptional, IsString} from 'class-validator';

export class DocumentDto {

    @IsString()
    @IsOptional()
    @ApiModelProperty({ type: String, required: true })
    readonly id: string;

    @IsString()
    @IsOptional()
    @ApiModelProperty({ type: String, required: true })
    readonly name: string;

    @IsString()
    @IsOptional()
    @ApiModelProperty({ type: String, required: true })
    readonly url: string;

    @IsString()
    @IsOptional()
    @ApiModelProperty({ type: String, required: true })
    readonly headline: string;

    @IsString()
    @IsOptional()
    @ApiModelProperty({ type: String, required: true })
    readonly content: string;

    @IsString()
    @IsOptional()
    @ApiModelProperty({ type: String, required: true })
    readonly type: string;

}
