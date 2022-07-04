import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { IPaginationOptions, paginate, Pagination } from "nestjs-typeorm-paginate";
import { Call_Log } from "src/typeorm";
import { buildQueryBuilder } from "src/utils";
import { Repository } from "typeorm";

@Injectable()
export class Call_logService {
  public calllogs: Call_Log[] = [];
  constructor(@InjectRepository(Call_Log) private logRepository: Repository<Call_Log>) { }

  createLogs(call): any {
    const newLog = this.logRepository.create(call);
    return this.logRepository.save(newLog);
  }

  async paginate(
    filterBy,
    options: IPaginationOptions,
  ): Promise<Pagination<Call_Log>> {
    const queryBuilder = this.logRepository.createQueryBuilder('log');
    if(filterBy){
      buildQueryBuilder(filterBy, queryBuilder, 'log.');
    }
    return await paginate<Call_Log>(queryBuilder, options);
  }


  getLog(id: number): any {
    return this.logRepository.findBy({ contact_id: id })
  }

  updateLog(call): any {
    return this.logRepository.save(call);
  }

  async removeLog(id: number): Promise<any> {
    await this.logRepository.delete(id);
    return "Log deleted";
  }

}