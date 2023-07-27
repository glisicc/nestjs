import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ActionDocument = HydratedDocument<Action>;

@Schema()
export class Action {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  slug: string;
}

export const ActionSchema = SchemaFactory.createForClass(Action);
