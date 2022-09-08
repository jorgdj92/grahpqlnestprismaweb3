import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { Web3Module } from 'libs/web3/src';

@Module({
  providers: [UsersResolver, UsersService, PrismaService],
  imports: [Web3Module],
})
export class UsersModule {}
