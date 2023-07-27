import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ServerDocument = HydratedDocument<Server>;

@Schema()
export class Server {
  @Prop()
  name: string;

  @Prop()
  ip: string;

  @Prop()
  location: string;
}

export const ServerSchema = SchemaFactory.createForClass(Server);
