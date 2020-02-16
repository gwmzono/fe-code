export class MySet extends Set{
  constructor(iter = []){
    super(iter);
  }
  //并集
  union(otherSet){
    if(!(otherSet instanceof MySet)){
      return false;
    }
    let temp = new MySet(this);
    for(let i of otherSet){
      if(!temp.has(i)){
        temp.add(i);
      }
    }
    return temp;
  }
  //交集
  intersect(otherSet){
    if(!(otherSet instanceof MySet)){
      return false;
    }
    let temp = new MySet();
    for(let i of otherSet){
      if(this.has(i)){
        temp.add(i);
      }
    }
    return temp;
  }
  //差集(a-b) a中有b中没有
  difference(otherSet){
    if(!(otherSet instanceof MySet)){
      return false;
    }
    let temp = new MySet();
    for(let i of this){
      if(!otherSet.has(i)){
        temp.add(i);
      }
    }
    return temp;
  }
  //子集
  isMysetOf(otherSet){
    if(!(otherSet instanceof MySet)){
      return false;
    }
    for(let i of this){
      if(!otherSet.has(i)){
        return false;
      }
    }
    return true;
  }
}