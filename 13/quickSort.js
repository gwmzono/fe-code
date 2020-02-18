import {defaultCompare} from '../modules/defaultCompare.js';

export function quickSort(arr, fn = defaultCompare){
  return quick(arr, 0, arr.length-1, fn);
}

//快速排序, O(nlogn), 2M的数字数组速度1s
function quick(arr, left, right, fn){
  if(arr.length <= 1){//不用排序
    return arr;
  }
  let i = left;
  let j = right;
  let pivot = arr[Math.floor((left+right) / 2)];
  // let pivot = arr[Math.ceil((left+right) /2)];
  while(i <= j){
    while(fn(arr[i], pivot) === -1){
      i++;
    }
    while(fn(arr[j], pivot) === 1){
      j--;
    }
    if(i <= j){
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;j--;
    }
  }
  if(left < i - 1){
    quick(arr, left, i-1, fn);
  }
  if(i < right){
    quick(arr, i, right, fn);
  }
  // if(left < j){
  //   quick(arr, left, j, fn);
  // }
  // if(j+1 < right){
  //   quick(arr, j+1, right, fn);
  // }
  return arr;
}

//i之前的一定小于pivot, i之后的大于等于pivot, 根据i二分处理即可
//其实根据j二分处理也可以, 边界条件需要用长度二的数组代入, 不小心就会无穷递归