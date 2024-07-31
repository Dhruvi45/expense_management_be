import { Schema, model, Document } from 'mongoose';

export interface IExpense extends Document {
  user_id: Schema.Types.ObjectId;
  amount: number;
  description: string;
  category: string;
  date: Date;
  created_at: Date;
  updated_at: Date;
}

const expenseSchema = new Schema<IExpense>({
  user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  amount: { type: Number, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  date: { type: Date, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

export const Expense = model<IExpense>('Expense', expenseSchema);
