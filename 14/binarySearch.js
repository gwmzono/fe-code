import {defaultCompare} from '../modules/defaultCompare.js';

export function binarySearch(arr, el, fn = defaultCompare){
  return recursion(arr, el, 0, arr.length-1, fn);
}

function recursion(arr, el, left, right, fn){
  if(left > right)  {return false;}
  if(left === right){
    return arr[left] === el ? true : false;
  }
  let mid = Math.floor((left+right)/2);
  let temp = fn(el, arr[mid]);
  if(temp === 0){
    return true;
  }else if(temp === 1){
    return recursion(arr, el, mid+1, right, fn);
  }else{
    return recursion(arr, el, left, mid-1, fn);
  }
}