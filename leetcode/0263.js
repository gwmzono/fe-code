//ugly-number
//因素只有2,3,5
const arr = [ 2, 3, 5 ]
export function test( num ) {
  if ( num < 1 ) {
    return false;
  }
  if ( num === 1 ) {
    return true;
  }
  for ( let n of arr ) {
    if ( num % n === 0 ) {
      return test( Math.floor( num / n ) );
    }
  }
  return  false;
}