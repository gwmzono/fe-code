/*
**  merge-sorted-array
**  合并两个数组, 不允许额外分配数组, 假设数组一长度足够插入数组二
**  @param  {Array}  arr1
**  @param  {Number} m
**  @param  {Array}  arr2
**  @param  {Number} n
**  @return {void}
*/

//O(m*n)
export function test(arr1, m, arr2, n){
  for(let i = 0; i < n; i++){
    let current = m-1;
    //如果不需要插入, 直接后缀
    if(arr2[i] >= arr1[current]){
      arr1[m] = arr2[i];
      m++;
      continue;
    }
    //需要插入时, 定位到小于等于arr2[i]的位置
    while(arr2[i] < arr1[current]){
      arr1[current+1] = arr1[current];
      current--;
    }
    //current位置是更小的, 所以后一个插入
    arr1[current+1] = arr2[i];
    m++;
  }
}