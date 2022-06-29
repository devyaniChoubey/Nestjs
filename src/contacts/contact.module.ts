import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Contact } from "src/typeorm/Contact";
import { ContactsController } from "./contact.controller";
import { Contact_Service } from "./contact.service";


@Module({
    imports:[TypeOrmModule.forFeature([Contact])],
    providers:[Contact_Service],
    controllers:[ContactsController]
})

export class ContactModule{};