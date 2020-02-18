import {defaultCompare} from '../modules/defaultCompare.js'
//插入排序 O(n^2) 将后一个元素插入前面已经排好序的数组
export function insertionSort(arr, fn = defaultCompare){
  if(!(arr instanceof Array) || typeof fn !== 'function'){
    return false;
  }
  for(let i = 1; i< arr.length; i++){
    for(let j = i; j > 0; j--){
      if(fn(arr[j-1], arr[j]) === 1){
        let temp = arr[j-1];
        arr[j-1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}