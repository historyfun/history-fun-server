/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, Logger } from '@nestjs/common';
import { CreateStudentPrintingDetailDto } from './dto/create-student-printing-detail.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { StudentPrintingDetail } from './entities/student-printing-detail.entity';

@Injectable()
export class StudentPrintingDetailsService {

  constructor(
    @InjectModel('StudentPrintingDetail') private studentPrintingDetailModel: Model<StudentPrintingDetail>,
  ) { }

  async addUser(createStudentPrintingDetailDto: CreateStudentPrintingDetailDto) {
    try {
      const newStudent = new this.studentPrintingDetailModel(createStudentPrintingDetailDto);
      await newStudent.save();
    } catch (error) {
      throw new Error(`Error in addUser function: ${error.message}`);
    }
  }

  async getAllUsers() {
    try {
      const students = await this.studentPrintingDetailModel.find().exec();
      return students.map((student) => ({
        Id: student.id,
        StudentId: student.StudentId,
        StudentFirstName: student.StudentFirstName,
        StudentLastName: student.StudentLastName,
        PartOfSongToPrint: student.PartOfSongToPrint,
        DesignId: student.DesignId,
        ProductToPrintOn: student.ProductToPrintOn,
      }));
    } catch (error) {
      throw new Error(`Error in GetUserDetails function: ${error.message}`);
    }
  }

  async getUserDetails(id: string) {
    try {
      const students = await this.studentPrintingDetailModel
        .find({ id: id }).exec();
      return students.map((student) => ({
        Id: student.id,
        StudentId: student.StudentId,
        StudentFirstName: student.StudentFirstName,
        StudentLastName: student.StudentLastName,
        PartOfSongToPrint: student.PartOfSongToPrint,
        DesignId: student.DesignId,
        ProductToPrintOn: student.ProductToPrintOn,
      }));
    } catch (error) {
      throw new Error(`Error in GetUserDetails function: ${error.message}`);
    }
  }

  async deleteUser(id: string) {
    try {
      await this.studentPrintingDetailModel.deleteOne({ _id: id }).exec();
    } catch (error) {
      throw new Error(`Error in GetUserDetails function: ${error.message}`);
    }
  }
}
