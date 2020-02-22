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
}