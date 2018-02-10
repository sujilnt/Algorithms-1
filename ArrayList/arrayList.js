/**
 * We are going to talk about two types of implementations of array, ArrayList and LinkedList (terms we're borrowing from Java.) What we're going to do is to approximate how these work underneath the hood; in reality since JavaScript is a garbage-collected language that you don't have worry about allocation and de-allocation, it is simplified.

 ArrayList is done by directly interacting with an allocated piece of memory. You then interact with that allocated piece of memory by addressing the specific indices in the array. In other words, you just treat it like a normal array. However things get a bit more complicated when deleting items from an ArrayList: you have to collapse the list down to the spot where you deleted.


 [a,b,c,d,e,f,g]
 -> delete index 3
 -> array is [a,b,c,(blank),e,f,g]
 -> shift elements 4,5,6 back one index
 -> array is [a,b,c,e,f,g]
 -> decrement length
 */

class ArrayList{
    constructor(){
        this.length=0;
        this.data={};
    }
    push(value){
      this.data[this.length]=value;
      this.length++;
    }
    pop(){
        this.delete(this.length-1);
    }
    getIndex(index){
        return this.data[index];

    }
    delete(index){
        const ans =this.data[index];
        this.__collapse(index);
        return ans ;
    }
    __collapse(index){
        for(let i =index;i<this.length;i++){
            this.data[i]=this.data[i+1];
        }
        delete this.data[this.length-1];
        this.length--;
    }

}
var list = new ArrayList();
list.push(23);
list.push(24);
list.push(25);
list.delete(2)



console.log(list.getIndex(1),list);