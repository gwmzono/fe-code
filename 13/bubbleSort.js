import {defaultCompare} from '../modules/defaultCompare.js';
//冒泡排序 O(n^2) 每一次迭代都把最大数放到最后
export function bubbleSort(arr, compareFn = defaultCompare){
  if(!(arr instanceof Array) || typeof compareFn !== 'function'){
    return false;
  }
  for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length-1-i; j++){
      if(compareFn(arr[j],arr[j+1]) === 1){
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}