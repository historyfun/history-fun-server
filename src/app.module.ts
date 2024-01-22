import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as dotenv from 'dotenv';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentPrintingDetailsModule } from './api/student-printing-details/student-printing-details.module';

dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI),
    StudentPrintingDetailsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
