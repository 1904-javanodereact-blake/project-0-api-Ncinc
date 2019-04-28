
import { Role } from './Role';
export class User {
        userId: number; // primary key
        username: string; // not null, unique
        user_password: string; // not null
        firstName: string; // not null
        lastName: string; // not null
        email: string; // not null
        user_role: Role; // will pass in role

            constructor(userId = 0, username = '',
            password = '', firstName = '',
            lastName = '', email = '',
            user_role: Role = undefined) {// role){
                this.userId = userId;
                this.username = username;
                this.user_password = password;
                this.firstName = firstName;
                this.lastName = lastName;
                this.email = email;
                this.user_role = user_role;
          }
      }