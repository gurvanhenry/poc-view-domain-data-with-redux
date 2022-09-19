export function searchUser(text: string) {
  if (text === 'G*') {
    return 'user:Gurvan';
  }  
  else if (text === 'A*') {
    return 'user:Alfred';
  }
  else{
    return '';
  }
}