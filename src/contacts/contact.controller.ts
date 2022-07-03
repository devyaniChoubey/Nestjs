import { Body, Controller, DefaultValuePipe, Delete, Get, Param, ParseIntPipe, Post, Put, Query, Request } from "@nestjs/common";
import { Pagination } from "nestjs-typeorm-paginate";
import { Contact } from "src/typeorm/Contact";
import { Contact_Service } from "./contact.service";



@Controller('contacts')
export class ContactsController {
    constructor(private contactService: Contact_Service) { }

    @Post('create')
    createContact(@Body() contact: Contact): any {
        return this.contactService.createContact(contact);
    }

    @Get()
    async getContacts(@Request() request,
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page = 1,
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit = 10,
    ): Promise<Pagination<Contact>> {
        return await this.contactService.paginate({
            limit,
            page,
            route: ''
        });
    }

    @Get(':id')
    getContact(@Param('id') id: number): any {
        return this.contactService.getContact(id);
    }

    @Put()
    updateContact(@Body() contact: Contact): any {
        return this.contactService.updateContact(contact);
    }

    @Delete(':id')
    deleteContact(@Param('id') id: number) {
        return this.contactService.removeContact(id);
    }
}