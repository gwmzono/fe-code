import {defaultCompare} from '../modules/defaultCompare.js';

function merge(left, right, fn){
  let temp = [];
  let i = 0;
  let j = 0;
  while(i < left.length && j < right.length){
    if(fn(left[i], right[j]) === -1){
      temp.push(left[i++]);
    }else{
      temp.push(right[j++]);
    }
  }
  //分解成单元素数组后合并, 合并前两个数组都是有序的, 所以可以直接拼接
  let rest = i === left.length ? right.slice(j) : left.slice(i);
  return temp.concat(rest);
}

//归并排序, O(nlog(n)), 将数组拆分, 合并时排序
export function mergeSort(arr, fn = defaultCompare){
  if(arr.length>1){
    let middle = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,middle), fn);
    let right = mergeSort(arr.slice(middle,arr.length), fn);
    arr = merge(left, right, fn);
  }
  return arr;
}

//master公式
//T(n) = aT(n/b) + O(n^d)
//n 样本数    a 子问题处理次数    b 几等分    d 表示额外操作次数
//d < log(b,a)    O(n^log(b,a))
//d = log(b,a)    O((n^d)logn)
//d > log(b,a)    O(n^d)
//比如这个归并排序, 采用二分法, 所以b=2, 分出来的子数组被递归了两次, 所以a=2
//merge函数是排序算法的额外开销, 里面有一层循环, 所以d=1
//这个时候,[log(b, a) = log(2, 2)] === [d = 1], 所以复杂度为O(nlogn)