/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { StudentPrintingDetailsService } from './student-printing-details.service';
import { StudentPrintingDetailsController } from './student-printing-details.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentPrintingDetailSchema } from './entities/student-printing-detail.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'StudentPrintingDetail', schema: StudentPrintingDetailSchema },
    ]),
  ],
  controllers: [StudentPrintingDetailsController],
  providers: [StudentPrintingDetailsService],
})
export class StudentPrintingDetailsModule { }
