/*
**  remove-duplicates-from-sorted-array
**  对一个已排序数组去重(不允许额外新增数组), 并将原数组前面修改, 超出索引无所谓
**  @param  {Array} arr
**  @return {Number}
*/

export function test(arr){
  let slow = 0;
  let fast = 0;
  let count = 1;
  for(; fast < arr.length; fast++){   //O(n)
    if(arr[slow] === arr[fast]){
      continue;
    }
    arr[count] = arr[fast];
    count++;
    slow = fast;
  }
  return count;
}