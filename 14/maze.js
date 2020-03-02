const solution = [];
export function maze( arr ) {
  for(let i = 0; i < arr.length; i++){
    solution[i] = [];
    for(let j = 0; j < arr[0].length; j++){
      solution[i][j] = 0;
    }
  }
  if ( recursion( arr, 0, 0 ) ) {
    return solution;
  } else {
    return 'no way out';
  }
}

function recursion( arr, m, n ) {
  if ( m === arr.length - 1 && n === arr[ 0 ].length - 1 ) {
    solution[ m ][ n ] = 1;
    return true;
  }
  if ( m < 0 || m > arr.length - 1 ||
    n < 0 || n > arr[ 0 ].length - 1 ||
    arr[ m ][ n ] === 0 ) {
    return false;
  }
  solution[ m ][ n ] = 1;
  if ( recursion( arr, m + 1, n ) ) {
    return true;
  }
  if ( recursion( arr, m, n + 1 ) ) {
    return true;
  }
  solution[ m ][ n ] = 0;
  return false;
}