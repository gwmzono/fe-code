export class SubSet extends Set{
  constructor(iter = []){
    super(iter);
  }
  //并集
  union(otherSet){
    if(!(otherSet instanceof SubSet)){
      return false;
    }
    let temp = new SubSet(this);
    for(let i of otherSet){
      if(!temp.has(i)){
        temp.add(i);
      }
    }
    return temp;
  }
  //交集
  intersect(otherSet){
    if(!(otherSet instanceof SubSet)){
      return false;
    }
    let temp = new SubSet();
    for(let i of otherSet){
      if(this.has(i)){
        temp.add(i);
      }
    }
    return temp;
  }
  //差集(a-b) a中有b中没有
  difference(otherSet){
    if(!(otherSet instanceof SubSet)){
      return false;
    }
    let temp = new SubSet();
    for(let i of this){
      if(!otherSet.has(i)){
        temp.add(i);
      }
    }
    return temp;
  }
  //子集
  isSubsetOf(otherSet){
    if(!(otherSet instanceof SubSet)){
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