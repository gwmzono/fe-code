export class Stack{
  constructor(){
    this.count = 0;
    this.items = {};
  }
  //方法
  push(el){
    this.items[this.count] = el;
    this.count++;
  }
  pop(){
    if(this.count === 0) return false;
    let temp = this.items[this.count - 1];
    delete this.items[this.count - 1];
    this.count--;
    return temp;
  }
  size(){
    return this.count;
  }
  isEmpty(){
    return this.count === 0;
  }
  peek(){
    if(this.isEmpty()){
      return undefined;
    }
    return this.items[this.count-1];
  }
  //以逗号隔开的字符串
  toString(){
    if(this.isEmpty()) return "";
    let str = `${this.items[0]}`;
    for(let i=1; i<this.count; i++){
      if(this.items[i] instanceof Array){
        str = `${str}, [${this.items[i]}]`;
        continue;
      }
      str = `${str}, ${this.items[i]}`;  //赋值比拼接快
    }
    return str;
  }
}