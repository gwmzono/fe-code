//把所有0移到末尾, 保持其他元素次序, 不允许创建其他数组, 且尽可能少的操作数组
export function test(arr){
  let left = 0;
  let right = 0;
  while(right < arr.length){
    while(arr[left] !== 0){   //定位到0
      left++;
    }
    right = left + 1;
    while(arr[right] === 0){  //定位到1
      right++;
    }
    arr[left++] = arr[right];
    arr[right++] = 0;
  }
  return arr;
}