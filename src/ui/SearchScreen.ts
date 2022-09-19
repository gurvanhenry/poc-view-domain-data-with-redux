import { User } from '../domain/User';
import { Api } from '../data/Api';

const api = new Api();
const user = new User(api);

export function renderSearchUser(text: string) {
  try {
    const out = user.searchUser(text);
    return out;
  } catch (error) {
    return '';
  }
}