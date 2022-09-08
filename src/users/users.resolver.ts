import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { Web3Service } from 'libs/web3/src';
import { Prisma } from '@prisma/client';

@Resolver('User')
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private web3Lib: Web3Service,
  ) {}

  @Mutation('createUser')
  async create(@Args('createUserInput') createUserInput: CreateUserInput) {
    const account = await this.web3Lib.createAddress();
    const address = account.address;
    const privateKey = account.privateKey;
    const { id, email, password, name } = createUserInput;
    return this.usersService.create({
      id,
      email,
      password,
      name,
      privateKey,
      address,
    });
  }

  @Query('users')
  findAll() {
    return this.usersService.findAll({});
  }

  @Query('user')
  findOne(@Args('where') where) {
    return this.usersService.findOne(where);
  }

  @Mutation('updateUser')
  update(@Args('where') where, @Args('data') data: UpdateUserInput) {
    return this.usersService.update({ where, data });
  }

  @Mutation('removeUser')
  remove(@Args('where') where) {
    return this.usersService.remove(where);
  }
}
