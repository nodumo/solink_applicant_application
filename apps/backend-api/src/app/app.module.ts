import { Module } from '@nestjs/common';
import {MikroOrmModule} from "@mikro-orm/nestjs";
import {AppController} from './controllers/app.controller';
import {AppService } from './app.service';

@Module({
  imports: [
    MikroOrmModule.forRoot({
      entities: ['./dist/entities'],
      entitiesTs: ['./src/entities'],
      dbName: 'my-db-name.sqlite3',
      type: 'sqlite',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
