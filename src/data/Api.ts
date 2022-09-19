export function callSearchUser(text: string) {
  if (text === 'G*') {
    return { status: "ok", result: 'user:Gurvan' };
  }
  else if (text === 'A*') {
    return { status: "ok", result: 'user:Alfred' };
  }
  else {
    return { status: "error" };
  }
}