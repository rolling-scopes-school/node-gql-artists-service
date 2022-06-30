import { IsArray, IsDate, IsOptional, IsString } from 'class-validator';

export class UpdateArtistDto {
    @IsOptional()
    @IsString()
    firstName: string;

    @IsOptional()
    @IsString()
    secondName: string;

    @IsOptional()
    @IsString()
    middleName: string;

    @IsOptional()
    @IsDate()
    birthDate: string;

    @IsOptional()
    @IsString()
    birthPlace: string;

    @IsOptional()
    @IsString()
    country: string;

    @IsOptional()
    @IsArray()
    bandsIds: string[];

    @IsOptional()
    @IsArray()
    instruments: string[];
}
