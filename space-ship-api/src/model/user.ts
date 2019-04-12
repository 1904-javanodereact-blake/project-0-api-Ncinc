// export class User {
//   userId: number;
//   username: string;
//   password: string;
//   name: string;
//   role: string;

//   constructor(userId = 0, username = '', password = '',
//   name = '', role = 'associate') {
//     this.userId = userId;
//     this.username = username;
//     this.password = password;
//     this.name = name;
//     this.role = role;
//   }
// }

// import { Role } from './Role';

export class User {
        userId: number; // primary key
        username: string; // not null, unique
        password: string; // not null
        firstName: string; // not null
        lastName: string; // not null
        email: string; // not null
        // role: Role; // will pass in role
        role: string;

            constructor(userId = 0, username = '',
            password = '', firstName = '',
            lastName = '', email = '',
            role = 'associate') {// role){
                this.userId = userId;
                this.username = username;
                this.password = password;
                this.firstName = firstName;
                this.lastName = lastName;
                this.email = email;
                this.role = role;
          }
      }