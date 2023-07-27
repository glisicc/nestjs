import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './modules/tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';
import { StrategyModule } from './modules/strategy/strategy.module';
import { ActionModule } from './modules/action/action.module';
import { AccountModule } from './modules/account/account.module';
import { WorkerModule } from './modules/worker/worker.module';
import { ServerModule } from './modules/server/server.module';
import { StatusModule } from './modules/status/status.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://stefang:Xz52foTbZx8toYmW@cluster1.msr8qno.mongodb.net/supervisor?retryWrites=true&w=majority',
    ),
    TasksModule,
    StrategyModule,
    ActionModule,
    AccountModule,
    WorkerModule,
    ServerModule,
    StatusModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
