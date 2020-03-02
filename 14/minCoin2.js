//贪心算法 硬币找零
import {
  quickSort
} from '../13/quickSort.js';

export function minCoin( coins, amount ) { //金额数组, 找零数
  quickSort( coins );
  let i = coins.length - 1;
  let change = [];
  while ( amount > 0 && i >= 0 ) {
    if ( amount >= coins[ i ] ) {
      change.push( coins[ i ] );
      amount -= coins[ i ];
    } else {
      i--
    }
  }
  return quickSort(change);
}