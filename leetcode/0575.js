//distribute-candies
//给一个数组, 长度是偶数, 其中不同的数代表不同的糖果, 按数量平均分配给兄妹
//问妹妹最多得到几种

//两种情况, 种类数大于半数, 妹妹最多得半数, 反之, 最多的种类数

export function test(arr){
  const hashMap = {};
  let count = 0;
  const half = Math.floor(arr.length/2);
  for(let i of arr){
    if(!hashMap[i]){
      hashMap[i] = true;
      count++;
    }
  }
  if(count < half){
    return count;
  }else{
    return half;
  }
}

export function test1(arr){
  const temp = new Set(arr);
  return Math.min(temp.size, arr.length>>1);
}