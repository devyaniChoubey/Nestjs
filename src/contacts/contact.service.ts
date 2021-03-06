import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { IPaginationOptions, paginate, Pagination } from "nestjs-typeorm-paginate";
import { Contact } from "src/typeorm/Contact";
import { buildQueryBuilder } from "src/utils";
import { Repository } from "typeorm";

@Injectable()
export class Contact_Service {
  public contacts: Contact[] = [];
  constructor(@InjectRepository(Contact) private contactRepository: Repository<Contact>) { }

  createContact(contact: Contact): any {
    const newContact = this.contactRepository.create(contact);
    return this.contactRepository.save(newContact);
  }

  getContact(id: number): any {
    return this.contactRepository.findBy({ contact_id: id })
  }

  async paginate(
    filterBy,options: IPaginationOptions,
  ): Promise<Pagination<Contact>> {
    const queryBuilder = this.contactRepository.createQueryBuilder('contact');
      
    if(filterBy){
      buildQueryBuilder(filterBy, queryBuilder, 'contact.');
    }

    return await paginate<Contact>(queryBuilder, options);
  }


  updateContact(contact): any {
    return this.contactRepository.save(contact);
  }

  async removeContact(id: number): Promise<any> {
    await this.contactRepository.delete(id);
    return "Contact deleted";
  }
}