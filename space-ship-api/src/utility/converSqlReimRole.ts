import { SqlRole } from '../dto/sql-role.dto';
import { Role } from '../model/Role';


export function convertSqlRole(role: SqlRole) {
  return new Role( role.user_role, role.roleid);
}