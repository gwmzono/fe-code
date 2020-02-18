function maxNumber(arr){
  let max = arr[0];
  for(let i = 0; i < arr.length; i++){
    max = arr[i] > max ? arr[i] : max;
  }
  return max;
}

//只能用于整数排序 O(n+k) k是计数数组大小  2M的数字数组500ms左右
export function countingSort(arr){
  if(arr.length <= 1){
    return arr;
  }
  let max = maxNumber(arr);
  let countingArr = [];
  for (let i = 0; i <= max; i++){
    countingArr[i] = 0;//填充0
  }
  for (let i = 0; i < arr.length; i++){
    countingArr[arr[i]]++;//对应位置计数
  }
  let temp = [];
  for(let i = 0; i < countingArr.length; i++){
    if(countingArr[i] === 0){
      continue;
    }
    while(countingArr[i]-- > 0){
      temp.push(i);
    }
  }
  return temp;
}
