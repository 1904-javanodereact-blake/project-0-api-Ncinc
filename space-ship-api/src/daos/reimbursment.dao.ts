// import { connectionPool } from '.';
// import { PoolClient } from  'pg';


// export  async function findAllReimbursment() {
//     let client: PoolClient;
//     try {
//     client = await  connectionPool.connect();
//     const result = await client.query('SELECT * FROM reimbursment.reimbursment');
//   console.log(result.rows);
//   console.log('hello');
//   } catch (err) {
//     console.log(err);
//   } finally {
//     client && client.release();
//     }
//   }

//   findAllReimbursment();