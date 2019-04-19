import express from 'express';
import bodyParser from 'body-parser';
import { userRouter } from './routers/user-router';
import { sessionMiddleware } from './middleware/session.middleware';
import { reimRouter } from './routers/reim-router';

const app = express();
const port = process.env.REPAY_DB_PORT || 8080;

app.use((req, res, next) => {
  console.log(`request made with url: ${req.url} and method: ${req.method}`);
  // const headers = req.rawHeaders;
  // console.log(headers);
  next();
});

// attach an actual object to req.body
app.use(bodyParser.json());

// attach the specific users session data to req.session
app.use(sessionMiddleware);

/**
 * Register Routers
 */
app.use('/users', userRouter);
app.use('/reim', reimRouter);

// start up the application
// app.listen(8070, () => {
//   console.log(`application started`);
// });

app.listen(port, () => {
  console.log(`application started on port:` + port);
});