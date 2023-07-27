import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type TaskDocument = HydratedDocument<Task>;

@Schema()
export class Task {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: '' })
  @Prop()
  name: string;

  @Prop()
  age: number;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
