import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Call_logModule } from './call_log/call_log.module';
import { ContactModule } from './contacts/contact.module';
import entities from './typeorm';

@Module({
  imports: [Call_logModule,ContactModule,TypeOrmModule.forRoot({
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: '123devyani',
    database: 'tutorialDb',
    entities: entities,
    synchronize: true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
