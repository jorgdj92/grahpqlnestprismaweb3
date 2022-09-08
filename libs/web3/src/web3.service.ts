import { Injectable } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Web3 = require('web3');

const web3 = new Web3(
  new Web3.providers.HttpProvider(process.env.URL_NODE_BLOCKCHAIN),
);

@Injectable()
export class Web3Service {
  async createAddress() {
    const create = await web3.eth.accounts.create();
    return create;
  }
}
