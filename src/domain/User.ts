import { callSearchUser } from '../data/Api';

export function searchUser(text: string) {
  const callResult = callSearchUser(text);
  if (callResult.status == 'ok') {
    return callResult.result;
  }
  else {
    throw Error('no user found');
  }
}