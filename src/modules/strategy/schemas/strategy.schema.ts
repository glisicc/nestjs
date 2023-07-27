import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type StrategyDocument = HydratedDocument<Strategy>;

@Schema()
export class Strategy {
  @Prop()
  name: number;

  @Prop()
  description: number;

  @Prop()
  duration: number;

  @Prop()
  numberOfActions: number;
}

export const StrategySchema = SchemaFactory.createForClass(Strategy);
