//属性外部不可见
const items = new WeakMap();
export class Stack {
  constructor () {
    items.set(this, []);
  }
  push(el){
    const arr = items.get(this);
    arr.push(el);
  }
  pop(){
    const arr = items.get(this);
    const r = arr.pop();
    return r;
  }
  size(){
    const arr = items.get(this);
    return arr.length;
  }
  isEmpty(){
    const arr = items.get(this);
    return arr.length === 0;
  }
  peek(){
    if(this.isEmpty()){
      return undefined;
    }
    const arr = items.get(this);
    return arr[arr.length-1];
  }
  toString(){
    const arr = items.get(this);
    return arr.toString();
  }
  clear(){
    items.set(this, []);
  }
}