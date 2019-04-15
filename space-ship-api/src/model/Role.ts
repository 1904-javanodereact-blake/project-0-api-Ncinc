export class Role {

    role: string;
    roleId: number;

    constructor(role = '', roleid: number) {
        this.role = role;
        this.roleId = roleid;
        }
}