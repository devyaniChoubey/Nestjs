import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Contact } from "src/typeorm/Contact";
import { Repository } from "typeorm";

@Injectable()
export class Contact_Service{
    public contacts:Contact[] = [];
    constructor(@InjectRepository(Contact) private contactRepository: Repository<Contact>){}

    createContact(contact:Contact): any{
        const newContact = this.contactRepository.create(contact);
        return this.contactRepository.save(newContact);
    }

    getContact(id:number): any{
        return this.contactRepository.findBy({contact_id:id})
    }

    getContacts(): any{
        return this.contactRepository.find();
    }

    async removeContact(id: number): Promise<any>{
        await this.contactRepository.delete(id);
        return "Contact deleted";
    }
}