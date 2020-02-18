export function shuffle(arr){
  if(arr.length <= 1){
    return arr;
  }
  for(let i = 0; i < arr.length; i++){
    let random = Math.floor(Math.random()*(arr.length-1));
    let temp = arr[i];
    arr[i] = arr[random];
    arr[random] = temp;
  }
  return arr;
}

function shuffle_1(arr){
  return arr.sort(function(){
    return Math.random()-0.5;
  })
}