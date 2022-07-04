import { Body, Controller, DefaultValuePipe, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, Query, Request, UsePipes, ValidationPipe } from "@nestjs/common";
import { Pagination } from "nestjs-typeorm-paginate";
import { Call_Log } from "src/typeorm";
import { Call_logService } from "./call_log.service";
import { CreateLogDto } from "./dto/createLog.dto";

@Controller('log')
export class Call_logController {
    constructor(private logService: Call_logService) { }

    @Post('create')
    @UsePipes(ValidationPipe)
    createLogs(@Body() createLogDto: CreateLogDto): any {
        return this.logService.createLogs(createLogDto);
    }

    @Get()
    async getLogs(@Request() request,
        @Query('filter') filter?: string,
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page = 1,
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit = 10,
    ): Promise<Pagination<Call_Log>> {
        return await this.logService.paginate(filter,{
            limit,
            page,
            route: ''
        });
    }

    @Get(':id')
    getLog(@Param('id') id: number) {
        return this.logService.getLog(id);
    }

    @Put()
    updateLog(log) {
        return this.logService.updateLog(log);
    }

    @Delete(':id')
    deleteLog(@Param('id') id: number) {
        return this.logService.removeLog(id);
    }
}