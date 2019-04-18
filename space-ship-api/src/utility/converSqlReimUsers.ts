import { SqlUser } from '../dto/sql-user.dto';
import { User } from '../model/user';


export function convertSqlUser(user: SqlUser) {
  return new User(user.userid, user.username,
    user.user_password, user.firstname,
    user.lastname, user.email, user.roleid);
}