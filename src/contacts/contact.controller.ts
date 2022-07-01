import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { Contact } from "src/typeorm/Contact";
import { Contact_Service } from "./contact.service";
import {
    ApiTags,
    ApiBearerAuth,
    ApiQuery,
    ApiOperation,
    ApiCreatedResponse,
} from '@nestjs/swagger';


@Controller('contacts')
export class ContactsController {
    constructor(private contactService: Contact_Service) { }

    @Post('create')
    createContact(@Body() contact: Contact): any {
        return this.contactService.createContact(contact);
    }

    @Get()
    @ApiQuery({
        name: 'filter',
        type: String,
        required: false,
        description: `
        {
          "where": [
            {
              "isSearch": true,
              "key": "channel",
              "value": "FACEBOOK"
            },
            {
              "isSearch": false,
              "key": "campaign_id",
              "value":"23845998298760213"
            }
          ],
          "orderBy":"ext_id DESC"
        }
        `,
    })
    getContacts(@Query('filter') filter?: string): any {
        return this.contactService.getContacts(filter);
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