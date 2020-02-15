import {Queue} from './Queue.js';

const q = new Queue();

export function hotPotato(arr=[]){
  try{
    if(!(arr instanceof Array)) throw '参数一必须是数组';
    if(arr.length === 0) throw '数组为空';
  }
  catch(err){
    console.error(err);
    return false;
  }
  
  const qq = new Queue();
  for(let item of arr){  //加进队列
    qq.enqueue(item);
  }
  while(qq.size > 1){
    let iter = Math.round(Math.random()*10+20);  //20-30随机数
    while(iter-- > 0){
      qq.enqueue(qq.dequeue());
    }
    console.log(`${qq.dequeue()} 被淘汰...`);
  }
  return qq.dequeue();
}