import { searchUser } from '../domain/User';

export function renderSearchUser(text: string) {
  try {
    const out = searchUser(text);
    return out;
  } catch (error) {
    return '';
  }
}