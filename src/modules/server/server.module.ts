import { Module } from '@nestjs/common';
import { ServerService } from './server.service';
import { ServerController } from './server.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ServerSchema } from './schema/server.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Server', schema: ServerSchema }]),
  ],
  controllers: [ServerController],
  providers: [ServerService],
})
export class ServerModule {}
