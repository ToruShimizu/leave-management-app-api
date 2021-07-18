import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { LeavesModule } from './leaves/leaves.module';

@Module({
  imports: [UsersModule, LeavesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
