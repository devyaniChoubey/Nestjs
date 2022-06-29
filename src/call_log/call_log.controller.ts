import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { Call_Log } from "src/typeorm";
import { Call_logService } from "./call_log.service";
import { CreateLogDto } from "./dto/createLog.dto";

@Controller('log')
export class Call_logController{
    constructor(private logService:Call_logService){}

    @Post('create')
    @UsePipes(ValidationPipe)
    createLogs(@Body() createLogDto:CreateLogDto): any{
       return this.logService.createLogs(createLogDto);
    }

    @Get()
    getLogs():any{
       return this.logService.getLogs();
    }

    @Get(':id')
    getLog(@Param('id') id:number) {
        return this.logService.getLog(id);
    }

    @Patch(':id')
    updateLog(@Param('id') id:number,@Body() calllog:Call_Log){
         
    }

    @Delete(':id')
    deleteLog(@Param('id') id:number){
        return this.logService.removeLog(id);
    }
}