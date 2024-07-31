import { Schema, model, Document } from 'mongoose';

export interface ICategory extends Document {
  name: string;
  description: string;
  user_id: Schema.Types.ObjectId;
  created_at: Date;
  updated_at: Date;
}

const categorySchema = new Schema<ICategory>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

export const Category = model<ICategory>('Category', categorySchema);
