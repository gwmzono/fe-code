import {defaultCompare} from '../modules/defaultCompare.js'
import {quickSort} from './quickSort.js';

//要求已排序
export function binarySearch(arr, el, fn = defaultCompare){
  quickSort(arr, fn);//因为要先排序, 所以另设了一个递归函数
  return recursiveBinarySearch(arr, el, fn);
}

function recursiveBinarySearch(arr, el, fn = defaultCompare){
  if(arr.length <= 1){//弹出条件
    if(fn(el, arr[0]) === 0){
      return `${el} is found!`;
    }
    return false;
  }
  let middle = Math.floor(arr.length/2);
  let temp = fn(el, arr[middle])
  if(temp === 0){
    return `${el} is found!`;
  }else if(temp === -1){
    return recursiveBinarySearch(arr.slice(0,middle), el, fn)
  }else{
    return recursiveBinarySearch(arr.slice(middle), el, fn);
  }
}

//二分(b=2), 子问题处理一次(a=1), 其他操作没有循环(d=0), d=log(b,a)
//所以复杂度O(log(n))