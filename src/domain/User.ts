import { IApi } from './IApi';

export class User {

  private api;

  constructor(api: IApi) {
    this.api = api;
  }

  searchUser(text: string) {
    const callResult = this.api.callSearchUser(text);
    if (callResult.status == 'ok') {
      return callResult.result;
    }
    else {
      throw Error('no user found');
    }
  }
}
