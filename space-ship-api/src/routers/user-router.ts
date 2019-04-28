import express from 'express';
// import { User } from '../model/user';
import { authMiddleware } from '../middleware/auth.middleware';
import * as userDao  from '../daos/reimbursment.dao';



/**
 * User router will handle all requests starting with
 *  /users
 */
export const userRouter = express.Router();

// userRouter.post('', (req, res) => {
//   console.log(`creating user`, req.body);
//   const user: User = req.body;
//   user.userId = Math.floor(Math.random() * 10000000);

//   res.status(201);
//   res.send(user);
// });

/////////////////////////////////////////////////////////////////

userRouter.get('/all', async  (req, res) => {
  const users = await userDao.findAllReimbursmentUsers();
  if (users) {
    console.log('I found users');
  } else {
    res.sendStatus(401);
  }

  console.log('retreiving all users');
  res.json(users);
});

// [authMiddleware(['admin']),

// userRouter.get('/:userid', async (req, res) => {
//   res.json(await userDao.findById(+req.params.ownerId));
// });






userRouter.get('/:userid', [ authMiddleware(['admin', 'finance']), async (req, res) => {

  res.json(await userDao.findById(+req.params.userid));
}]);

// userRouter.get('/:userid', async (req, res) => {

//   res.json(await userDao.findById(+req.params.userid));
// });

// userRouter.post('/login', async (req, res) => {// /login
//   const { username, password } = req.body;
//   console.log('hello login');
//   const users = await userDao.findByUsernameAndPassword(username, password);
// console.log('logging in');
//   if (users) {
//     // attach the user data to the session object
//     req.session.user = users;
//     res.end();
//   } else {
//     res.sendStatus(401);
//   }
// });

// function to patch/update a user in the database.
userRouter.patch('',  [
  authMiddleware(['admin']),
  async(req, res) => {
    const { userid } = req.body;
    const prevRecord = await userDao.findById(userid);
    console.log('hello patch');
    for (const key in prevRecord) {
      if ((prevRecord[key] !== req.body[key]) && (req.body[key] !== undefined)) {
        prevRecord[key] = req.body[key];
      }
    }
    await userDao.updateUsernames(userid, prevRecord.username,
      prevRecord.user_password,
      prevRecord.firstname, prevRecord.lastname, prevRecord.email, prevRecord.roleid);

    const newUser = await userDao.findById(userid);
    res.json(newUser);
   }]);

  // userRouter.get('/:id', [authMiddleware(['admin', 'finance']), (req, res) => {
  //   const id: number = +req.params.id;
  //   console.log(`retreiving user with id: ${id}`);
  //   const user = users.find(u => u.userId === id);
  //   if (user) {
  //     res.json(user);
  //   } else {
  //     res.sendStatus(404);
  //   }
  // }]);