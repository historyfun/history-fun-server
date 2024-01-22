/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Query, Delete } from '@nestjs/common';
import { StudentPrintingDetailsService } from './student-printing-details.service';
import { CreateStudentPrintingDetailDto } from './dto/create-student-printing-detail.dto';

@Controller('api/User')
export class StudentPrintingDetailsController {
  constructor(private readonly studentPrintingDetailsService: StudentPrintingDetailsService) { }

  @Post('/AddUser')
  async addUser(@Body() createStudentPrintingDetailDto: CreateStudentPrintingDetailDto) {
    await this.studentPrintingDetailsService.addUser(createStudentPrintingDetailDto);
  }

  @Get('/GetAllUsers')
  async getAllUsers() {
    return await this.studentPrintingDetailsService.getAllUsers();
  }

  @Get('/GetUserDetails')
  async getUserDetails(@Query('id') id: string) {
    return await this.studentPrintingDetailsService.getUserDetails(id);
  }

  @Delete('/DeleteUser')
  async deleteUser(@Query('id') id: string) {
    await this.studentPrintingDetailsService.deleteUser(id);
  }

}
