import {
  defaultCompare
} from '../modules/defaultCompare.js';
//选择排序 O(n^2) 每次迭代选出最小值放到前面
export function selectionSort( arr, fn = defaultCompare ) {
  if ( !( arr instanceof Array ) || typeof fn !== 'function' ) {
    return false;
  }
  for ( let i = 0; i < arr.length; i++ ) {
    let index = i;
    for ( let j = i + 1; j < arr.length; j++ ) {
      if ( fn( arr[ index ], arr[ j ] ) === 1 ) {
        index = j;
      }
    }
    if ( index !== i ) {
      let temp = arr[ i ];
      arr[ i ] = arr[ index ];
      arr[ index ] = temp;
    }
  }
  return arr;
}