export function test( n ) {
  let temp = parseInt( '01010101010101010101010101010101', 2 );
  if ( (n &  n - 1 ) === 0 && temp & n === n){
    return true;
  }
  return false;
}