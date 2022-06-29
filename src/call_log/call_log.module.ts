import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Call_Log } from "src/typeorm";
import { Call_logController } from "./call_log.controller";
import { Call_logService } from "./call_log.service";


@Module({
    imports:[TypeOrmModule.forFeature([Call_Log])],
    providers:[Call_logService],
    controllers:[Call_logController]
})

export class Call_logModule{}