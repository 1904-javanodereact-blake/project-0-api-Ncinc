export class Reimbursement {
    reimbursementlistid: number; // primary key
    author: number;  // foreign key -> User, not null
    amount: number; // not null
    date_submitted: string; // not null
    date_resolved: string;
    description: string; // not null
    resolver: number; // foreign key -> User
    status: number; // foreign ey -> ReimbursementStatus, not null
    type: number; // foreign key -> ReimbursementType

    constructor (reimbursementlistid = 0, author = 0, amount= 0,
        date_submitted= '', date_resolved= '', description = '',
        resolver = 0, status = 0, type = 0) {

            this.reimbursementlistid = reimbursementlistid;
            this.author = author;
            this.amount = amount;
            this.date_submitted = date_submitted;
            this.date_resolved = date_resolved;
            this.description = description;
            this.resolver = resolver;
            this.status = status;
            this.type = type;
    }
  }