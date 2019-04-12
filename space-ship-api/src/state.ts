import { User } from './model/user';
import { Spaceship } from './model/spaceship';
import { ReimbursementrStatus } from './model/ReimbursementrStatus';
import { Reimbursement } from './model/Reimbursement';
// import { Role } from './model/Role';


// export let users: User[] = [
//   new User(1, 'blake', 'pass', 'blake', 'admin'),
//   new User(2, 'Bradley', 'pass', 'Bradley'),
//   new User(3, 'Shahram', 'pass', 'Shahram'),
//   new User(4, 'Pj', 'pass', 'Pj'),
//   new User(5, 'Danae', 'pass', 'Danae'),
//   new User(6, 'Fred', 'pass', 'Fred'),
// ];

// export let users: User[] = [new User(1, 'Nick', 'pass', 'Nicholas', 'Cordon', 'emai@email.com', Role),
// new User(2, 'Bruce', 'pass', 'Bruce', 'Wayne', 'bat@email.com', Role),
// new User(3, 'Wally', 'pass', 'Wally', 'West', 'flash@email.com', Role),
// new User(4, 'John', 'pass', 'John', 'Jones', 'martin@email.com', Role),
// new User(5, 'Diana', 'pass', 'Diana', 'Prince', 'amazon@email.com', Role)];

export let users: User[] = [
new User(1, 'Nick', 'pass', 'Nicholas', 'Cordon', 'emai@email.com',
'admin'),
new User(2, 'Bruce', 'pass', 'Bruce', 'Wayne', 'bat@email.com'),
new User(3, 'Wally', 'pass', 'Wally', 'West', 'flash@email.com'),
new User(4, 'John', 'pass', 'John', 'Jones', 'martin@email.com'),
new User(5, 'Diana', 'pass', 'Diana', 'Prince', 'amazon@email.com', 'finance-manager'),
new User(6, 'Blake', 'pass', 'Blake', 'Kruppa', 'revature@email.com',
'finance-manager')];

export let spaceships: Spaceship[] = [
  new Spaceship(1, 2, 'Enterprise', 5000, 5000, 'its a ship'),
  new Spaceship(2, 2, 'Tesla', 5000, 5000, 'its a ship'),
  new Spaceship(3, 2, 'SS Minow', 5000, 5000, 'its a ship'),
  new Spaceship(4, 2, 'X-Wing', 5000, 5000, 'its a ship'),
  new Spaceship(5, 4, 'Salmon Catcher', 5000, 5000, 'its a ship'),
  new Spaceship(6, 6, 'Serrenity', 5000, 5000, 'its a ship'),
];

export let reimstats: ReimbursementrStatus[] = [
new ReimbursementrStatus('needs review', 1),
new ReimbursementrStatus('needs review', 2),
new ReimbursementrStatus('needs review', 3),
new ReimbursementrStatus('needs review', 4),
new ReimbursementrStatus('needs review', 5),
new ReimbursementrStatus('needs review', 6)];

export let reim: Reimbursement[] = [
  new Reimbursement(1, 1, 215355666, 12018, 12018, 'approved', 1, 1),
  new Reimbursement(2, 2, 215355666, 12018, 12018, 'approved', 1, 1),
  new Reimbursement(3, 1, 215355666, 12018, 12018, 'dissapprove', 1, 1),
  new Reimbursement(4, 2, 215355666, 12018, 12018, 'approved', 1, 1),
  new Reimbursement(5, 1, 215355666, 12018, 12018, 'dissapprove', 1, 2),
  new Reimbursement(6, 2, 215355666, 12018, 12018, 'dissapprove', 1, 2)
];
