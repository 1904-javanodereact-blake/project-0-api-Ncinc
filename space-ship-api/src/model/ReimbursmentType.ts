export class ReimbursmentType {

    type: string;
    typeId: number;

    constructor(type = '', typeId = 0) {
        this.type = type;
        this.typeId = typeId;
        }
}