/* eslint-disable prettier/prettier */
export class CreateStudentPrintingDetailDto {
    constructor(
        public StudentId: string,
        public StudentFirstName: string,
        public StudentLastName: string,
        public PartOfSongToPrint: string,
        public DesignId: string,
        public ProductToPrintOn: string,
    ) { }
}