import { IApi } from '../domain/IApi';

export class Api implements IApi {

  callSearchUser(text: string) {
    if (text === 'G*') {
      return { status: "ok", result: 'user:Gurvan' };
    }
    else if (text === 'A*') {
      return { status: "ok", result: 'user:Alfred' };
    }
    else {
      return { status: "error", result: "" };
    }
  }
}