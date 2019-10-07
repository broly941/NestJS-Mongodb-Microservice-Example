import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class DocumentDto {

    @IsString()
    @IsNotEmpty()
    @ApiModelProperty({ type: String, required: true })
    readonly id: string;

    @IsString()
    @IsNotEmpty()
    @ApiModelProperty({ type: String, required: true })
    readonly name: string;
}
