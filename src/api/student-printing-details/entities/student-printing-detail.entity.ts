/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';

export const StudentPrintingDetailSchema = new mongoose.Schema({
  StudentId: String,
  StudentFirstName: String,
  StudentLastName: String,
  PartOfSongToPrint: String,
  DesignId: String,
  ProductToPrintOn: String,
});

export class StudentPrintingDetail {
  constructor(
    public StudentId: string,
    public StudentFirstName: string,
    public StudentLastName: string,
    public PartOfSongToPrint: string,
    public DesignId: string,
    public ProductToPrintOn: string,
  ) {}
}
