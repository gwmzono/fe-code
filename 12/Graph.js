const COLOR = {   //预设颜色常量, 更便于记忆
  WHITE: 0,
  GREY : 1,
  BLACK: 2,
}

function initColor(vertices){
  if(!Array.isArray(vertices)){
    return false;
  }
  let color = new Map();
  for(let i of vertices){
    color.set(i, COLOR.WHITE);
  }
  return color;
}

function DFSRecursion(start, color, callback){
  let children = this.dict.get(start);
  color.set(start, COLOR.BLACK);
  callback.call(this, start);
  for(let i of children){
    if(color.get(i) === COLOR.WHITE){
      color.set(i, COLOR.GREY);
      DFSRecursion.call(this, i, color, callback);
    }
  }
}

//图,相关概念看书
export class Graph{
  constructor(isDirected = false){
    this.isDirected = isDirected;
    this.vertices = [];
    this.dict = new Map();  //用ES6的Map作为字典
  }
  //增加顶点
  addVertex(v){
    if(this.vertices.indexOf(v) === -1){
      this.vertices.push(v);
      this.dict.set(v,[]);
      return true;
    }
    return false;
  }
  //增加连接
  addEdge(v,w){
    if(!this.dict.has(v)){
      this.addVertex(v);
    }
    if(!this.dict.has(w)){
      this.addVertex(w);
    }
    let vArr = this.dict.get(v);
    if(vArr.indexOf(w) === -1){
      vArr.push(w)
    }
    let wArr = this.dict.get(w);
    if(!this.isDirected && wArr.indexOf(v) === -1){  //是无向图
      this.dict.get(w).push(v);
    }
  }
  //返回邻接表
  getDict(){
    return this.dict;
  }
  //返回顶点列表
  getVertices(){
    return this.vertices;
  }
  
  //打印邻接表
  printDict(){
    let dict = this.dict.entries();
    for(let item of dict){
      let temp = `${item[0]} -> ${item[1].join(', ')}`;
      console.log(temp);
    }
  }
  
  //广度优先遍历(breadth-first search)
  BFS(start, callback){
    let color = initColor(this.vertices);
    if(!color)    return 'vertices is not valid!';
    if(this.vertices.indexOf(start) === -1) return 'start is not exist!';
    if(typeof callback !== 'function')      return 'param 2 should be function!';
    let queue = [];
    queue.push(start);
    color.set(start, COLOR.GREY);
    //每次先弹出最前端的, 再将它是白色的的后代进队列, 最后调用这个弹出的元素
    while(queue.length > 0){
      let current = queue.shift();
      let children = this.dict.get(current);
      for(let i of children){
        if(color.get(i) === COLOR.WHITE){   //是白色就压入队列
          color.set(i, COLOR.GREY);
          queue.push(i);
        }
      }
      callback.call(this,current);
      color.set(current, COLOR.BLACK);
    }
  }
  
  //深度优先遍历(depth-first search)
  DFS(start, callback){
    let color = initColor(this.vertices);
    if(!color)    return 'vertices is not valid!';
    if(this.vertices.indexOf(start) === -1)   return 'start is not exist!';
    if(typeof callback !== 'function')      return 'param 2 should be function!';
    DFSRecursion.call(this, start, color, callback);
  }
}