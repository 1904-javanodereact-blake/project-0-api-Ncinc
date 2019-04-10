export class ReimbursementrStatus {

    status: string;
    statusId: number;

    constructor(status = '', statusId = 0) {
        this.status = status;
        this.statusId = statusId;
        }
}