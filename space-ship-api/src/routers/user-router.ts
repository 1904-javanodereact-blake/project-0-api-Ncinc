import express from 'express';
import { users } from '../state';
import { reimstats } from '../state';
import { reim } from '../state';
import { User } from '../model/user';
import { authMiddleware } from '../middleware/auth.middleware';
import * as userDao  from '../daos/reimbursment.dao';

/**
 * User router will handle all requests starting with
 *  /users
 */
export const userRouter = express.Router();



// userRouter.post('/login', (req, res) => {// /login
//   const { username, password } = req.body;
//   const user = users.find(u => u.username === username && u.user_password === password);
// console.log('logging in');
//   if (user) {
//     // attach the user data to the session object
//     req.session.user = user;
//     res.end();
//   } else {
//     res.sendStatus(401);
//   }
// });

/**
 * find all users
 * endpoint: /users
 */
// userRouter.get('/all', [// /users
//   authMiddleware(['admin']),
//   (req, res) => {
//     console.log('retreiving all users');
//     res.json(users);
//   }]);

/**
 * find user by id
 * endpoint: /users/:id
 */
// userRouter.get('/:id', (req, res) => {// /users/id
//   const id: number = +req.params.id;
//   console.log(`retreiving user with id:? ${id}`);
//   const user = users.find(u => u.userId === id);
//   if (user) {
//     res.json(user);
//   } else {
//     res.sendStatus(404);
//   }
// });

userRouter.patch('', (req, res) => {// patch
  const { body } = req; // destructuring
  console.log(`updating user`, body);
  const user = users.find((u) => {
    return u.userId === body.userId;
  });
  if (!user) {
    res.sendStatus(404);
  } else {
    for (const field in user) {
      if (body[field] !== undefined) {
        user[field] = body[field];
      }
    }
    res.json(user);
  }
});

userRouter.get('/reimbursements/status/:statusId', [// /reimbursements status
  authMiddleware(['finance-manager']),
  (req, res) => {
    console.log('retreiving all reimbursements status');
    res.json(reimstats);
  }]);

  userRouter.get('/reimbursements/author/userId/:userId', [// /reimbursements
    authMiddleware(['finance-manager']),
    (req, res) => {
      console.log('retreiving all reimbursements status');
      res.json(reim);
    }]);

    userRouter.post('/reimbursements', [// /reimbursements
      authMiddleware(['finance-manager']),
      (req, res) => {
        console.log('retreiving all reimbursements status');
      }]);

userRouter.post('', (req, res) => {
  console.log(`creating user`, req.body);
  const user: User = req.body;
  user.userId = Math.floor(Math.random() * 10000000);
  users.push(user);
  res.status(201);
  res.send(user);
});

/////////////////////////////////////////////////////////////////

userRouter.get('/all',  [authMiddleware(['admin']), async  (req, res) => {
  const users = await userDao.findAllReimbursmentUsers();
  if (users) {
    console.log('I found users');
  } else {
    res.sendStatus(401);
  }

  console.log('retreiving all users');
  res.json(users);
}]);


userRouter.get('/alltest', async  (req, res) => {
  const users = await userDao.findAllReimbursmentUsers();

  console.log('retreiving all users');
  res.json(users);
});

// userRouter.get('/all', [// /users
//   authMiddleware(['admin']),
//   (req, res) => {
//     console.log('retreiving all users');
//     res.json(users);
//   }]);

userRouter.post('/login', async (req, res) => {// /login
  const { username, password } = req.body;
  // const user = users.find(u => u.username === username && u.user_password === password);
  const users = await userDao.findByUsernameAndPassword(username, password);
console.log('logging in');
  if (users) {
    // attach the user data to the session object
    req.session.user = users;
    res.end();
  } else {
    res.sendStatus(401);
  }
});