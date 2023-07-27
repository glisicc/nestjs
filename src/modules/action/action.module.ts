import { Module } from '@nestjs/common';
import { ActionService } from './action.service';
import { ActionController } from './action.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ActionSchema } from './schemas/action.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Action', schema: ActionSchema }]),
  ],
  controllers: [ActionController],
  providers: [ActionService],
})
export class ActionModule {}
