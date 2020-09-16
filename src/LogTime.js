export function LogTime() {
  const current = new Date();
  return current.getFullYear() +
  '/' + ('0' + (current.getMonth() + 1)).slice(-2) +
  '/' + ('0' + current.getDate()).slice(-2) +
  ' ' + ('0' + current.getHours()).slice(-2) + 
  ':' + ('0' + current.getMinutes()).slice(-2);
}

// return something like yyyy/mm/dd hh:mm