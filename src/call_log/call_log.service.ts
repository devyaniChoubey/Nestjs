import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Call_Log } from "src/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class Call_logService {
    public calllogs: Call_Log[] = [];
    constructor(@InjectRepository(Call_Log) private logRepository: Repository<Call_Log>){}

    createLogs(call): any{
        const newLog = this.logRepository.create(call);
        return this.logRepository.save(newLog);
    }

    getLogs(): any{
        return this.logRepository.find();
    }

    getLog(id:number): any{
       return this.logRepository.findBy({contact_id:id})
    }

    async removeLog(id: number): Promise<any>{
        await this.logRepository.delete(id);
        return "Log deleted";
    }
    
}