import express from 'express';
import { addTransaction, deleteTransaction, getAllTransaction } from '../controllers/transactionController.js';

const transactionRoute=express.Router();

transactionRoute.post('/add-transaction',addTransaction);
transactionRoute.post('/get-transaction',getAllTransaction)
transactionRoute.post('/delete-transaction',deleteTransaction)

export default transactionRoute;