import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { Contact } from "src/typeorm/Contact";
import { Contact_Service } from "./contact.service";


@Controller('contacts')
export class ContactsController{
    constructor(private contactService:Contact_Service){}

    @Post()
    createContact(@Body() contact:Contact):any{
        return this.contactService.createContact(contact);
    }

    @Get()
    getContacts():any{
        return this.contactService.getContacts();
    }

    @Get(':id')
    getContact(@Param('id') id:number):any{
        return this.contactService.getContact(id);
    }

    @Delete(':id')
    deleteContact(@Param('id') id:number){
        return this.contactService.removeContact(id);
    }
}