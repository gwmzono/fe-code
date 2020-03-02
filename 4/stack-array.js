export class Stack{
    constructor(arr=[]){
        this.items = arr;
    }
    push(el){
        this.items.push(el);
    };
    pop(){
        return this.items.pop();
    };
    peek(){
        return this.items[this.items.length - 1];
    };
    isEmpty(){
        return this.items.length === 0;
    };
    get size(){
        return this.items.length;
    };
    clear(){
        this.items = [];
    };
}