const cache = {};
export function test(arr1, arr2){
  let arr = [];
  for(let i of arr1){
    if(!cache[i]){
      cache[i] = 0;
    }
    cache[i]++;
  }
  for(let i of arr2){
    if(i in cache){
      arr.push(i);
    }
  }
  return arr;
}