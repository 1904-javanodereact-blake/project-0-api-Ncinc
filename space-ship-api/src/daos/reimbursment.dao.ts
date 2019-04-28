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

  export async function findById(user_id: number) {
    let client: PoolClient;
    try {
      client = await connectionPool.connect();
      const queryString = 'SELECT * FROM reimbursement.app_user as use WHERE userid = $1';
      const result = await client.query(queryString, [user_id]);
       const usersid = result.rows[0];
       console.log(result.rows);
      return usersid;
    } catch (err) {
      console.log(err);
      return undefined;
    } finally {
      client && client.release();
    }
  }

  export async function findByAuthor(author_id: number) {
    let client: PoolClient;
    try {
      client = await connectionPool.connect();
      const queryString = 'SELECT * FROM reimbursement.reimbursementlist as reim WHERE author = $1 ORDER BY date_submitted ASC';
      const result = await client.query(queryString, [author_id]);
       const authorsid = result.rows;
       console.log(result.rows);
      return authorsid;
    } catch (err) {
      console.log(err);
      return undefined;
    } finally {
      client && client.release();
    }
  }

  export async function findByStatus(status_id: number) {
    let client: PoolClient;
    try {
      client = await connectionPool.connect();
      const queryString = 'SELECT * FROM reimbursement.reimbursementlist as reim WHERE status = $1 ORDER BY date_submitted ASC';
      const result = await client.query(queryString, [status_id]);
      // convert db results into actual spaceships
       const statussid = result.rows;
       console.log(result.rows);
      return statussid;
    } catch (err) {
      console.log(err);
      return undefined;
    } finally {
      client && client.release();
    }
  }


  export async function findById4(reimbursementlistid: number) {
    let client: PoolClient;
    try {
      client = await connectionPool.connect();
      const queryString = 'SELECT * FROM reimbursement.reimbursementlist WHERE reimbursementlistid = $1 ';
      const result = await client.query(queryString, [reimbursementlistid]);
       const reim = result.rows[0];
       console.log(result.rows);
      return reim;
    } catch (err) {
      console.log(err);
      return undefined;
    } finally {
      client && client.release();
    }
  }

  export async function updateUsernames(userid, username, user_password,
    firstname, lastname, email, roleid) {
      console.log('hello');
    let client: PoolClient;
    try {
      client = await connectionPool.connect();
      const queryString = `UPDATE reimbursement.app_user
      SET username = $2, user_password = $3,
      firstname = $4, lastname = $5, email = $6,
      roleid = $7
      WHERE userid = $1;`;
      await client.query(queryString, [userid, username,
        user_password, firstname,
        lastname, email, roleid]);
    } catch (err) {
      console.log(err);
      return undefined;
    } finally {
      client && client.release();
    }
  }

  export async function updateReimbursement( reimbursementlistid, author, amount,
    date_submitted, date_resolved, description, resolver, status, type) {
      console.log('hello');
    let client: PoolClient;
    try {
      client = await connectionPool.connect();
      const queryString = `UPDATE reimbursement.reimbursementlist
      SET author = $2, amount = $3,
      date_submitted = $4, date_resolved = $5, description = $6,
      resolver = $7, status = $8, type = $9
      WHERE reimbursementlistid = $1;`;
      await client.query(queryString, [reimbursementlistid, author, amount,
        date_submitted, date_resolved, description, resolver, status, type]);
    } catch (err) {
      console.log(err);
      return undefined;
    } finally {
      client && client.release();
    }
  }