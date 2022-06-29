import { IsNotEmpty } from "class-validator";

export class CreateLogDto{
    @IsNotEmpty()
    Name: string;

    @IsNotEmpty()
    Phone_number: number;
}