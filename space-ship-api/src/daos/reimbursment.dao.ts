 import { connectionPool } from '.';
 import { PoolClient } from  'pg';
 import { convertSqlUser } from '../utility/converSqlReimUsers';
 import { convertSqlRole } from '../utility/converSqlReimRole';


  // export async function findAllReimbursmentUsers() {
  //   let client: PoolClient;
  //   try {
  //     client = await connectionPool.connect();
  //     const result = await client.query('SELECT * FROM reimbursment.app_user');
  //     return result.rows.map(convertSqlUser);
  //   } catch (err) {
  //     console.log(err);
  //     return undefined;
  //   } finally {
  //     client && client.release();
  //   }
  // }

  export async function findAllReimbursmentUsers() {
    let client: PoolClient;
    try {
      client = await connectionPool.connect();
      const queryString = `SELECT * FROM reimbursement.app_user as us
      INNER JOIN reimbursement.user_role as ro ON (us.roleid = ro.roleid)`;
      const result = await client.query(queryString);
      const users = result.rows.map(convertSqlUser);
      for (let i = 0; i < result.rows.length; i++) {
        users[i].user_role = convertSqlRole(result.rows[i]);
      }
      return users;
    } catch (err) {
      console.log(err);
      return undefined;
    } finally {
      client && client.release();
    }
  }


  export async function findByUsernameAndPassword(username: string, password: string) {
    let client: PoolClient;
    try {
      client = await connectionPool.connect();
      const queryString = `SELECT * FROM reimbursement.app_user as us
        INNER JOIN reimbursement.user_role as ro ON (us.roleid = ro.roleid)
        WHERE username = $1 AND user_password = $2`;
      const result = await client.query(queryString, [username, password]);
      const user = result.rows[0];
      if (user) {
        const convertedUser = convertSqlUser(user);
        convertedUser.user_role = convertSqlRole(user);
        return convertedUser;
      } else {
        return undefined;
      }
    } catch (err) {
      console.log(err);
      return undefined;
    } finally {
      client && client.release();
    }
  }




//   export async function findById(id: number) {
//     let client: PoolClient;
//     try {
//       client = await connectionPool.connect();
//       const queryString = 'SELECT * FROM spaceship.spaceship WHERE ship_id = $1';
//       const result = await client.query(queryString, [id]);
//       console.log(result.rows);
//       return convertSqlShip(result.rows[0]);
//     } catch (err) {
//       console.log(err);
//       return undefined;
//     } finally {
//       client && client.release();
//     }
//   }