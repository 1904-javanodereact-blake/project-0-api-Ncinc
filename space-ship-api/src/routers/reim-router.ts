import express from 'express';
 import { authMiddleware } from '../middleware/auth.middleware';
 import * as userDao  from '../daos/reimbursment.dao';



// GET /reimbursements/status/:statusId
// GET /reimbursements/author/userId:userId
// POST /reimbursements
// PATCH /reimbursements


export const reimRouter = express.Router();

reimRouter.get('/status/:statusId', [ authMiddleware(['admin', 'finance']), async (req, res) => {

    res.json(await userDao.findByStatus(+req.params.statusId));
  }]);

  reimRouter.get('author/userId:userId', [ authMiddleware(['admin', 'finance']), async (req, res) => {

    res.json(await userDao.findByAuthor(+req.params.userId));
  }]);

  // reimRouter.patch('',  [ authMiddleware(['admin']),
  //   async(req, res) => {const { reimbursementlistid } = req.body;
  //     const prevRecord = await userDao.findById4(reimbursementlistid);
  //     console.log('hello patch');
  //     for (const key in prevRecord) {
  //       if ((prevRecord[key] !== req.body[key]) && (req.body[key] !== undefined)) {
  //         prevRecord[key] = req.body[key];
  //       }
  //     }
  //   await userDao.updateReimbursement(reimbursementlistid, prevRecord.author,
  //   prevRecord.amount, prevRecord.date_submitted, prevRecord.date_resolved, prevRecord.description, prevRecord.resolver, prevRecord.status, prevRecord.type);
  //   const newUser = await userDao.findById4(reimbursementlistid);
  //   res.json(newUser);
  //   }]);
