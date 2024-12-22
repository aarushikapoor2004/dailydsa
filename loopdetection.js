// //detect cycle in a loop 
// //1.) by map 
// Map is a data structure stores values with a number and a string next to it 
// for this que we can use map by storing the node and info if the node is visited or not in boolean 
// true or false if the node is already visited map will detect the loop in the linkedlist 


// create a node class to create the nodes 
// create a constructor with data of the nodes .
// store the current data of the nodes 
// create a pointer for the data of the nodes 
// create to pointer to point at the next node which would currently be null.
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
// create a list to store the values of the node.
class LinkedList{ //in s class uses pascal case
    constructor(){
        this.head = null;
    }

//create a function to add nodes to the list.
// create a new node bnyge 
// check if the list is empty or not 
// if the list is empty i.e if head is equal to the null 
// head node will point to the new node 
// if it is not empty then 
// declare curretn which is head 
// if current ka next is not empty then current is current ka next 
// then current ka next would be nyi node 
add(data){
    const newNode = new Node(data);
    if(this.head === null){
        this.head = newNode;
    }
    else{
        let current = this.head;
        while(current.next !== null){
            current = current.next;
        }
        current.next = newNode;
    }
}
detectcycle(data){ //this is approach one map method
   const detector = new Map();
   let current = this.head;
   while(current !== null){
       if(detector.has(current)){
           return true;
       }
       detector.set(current,true);
       current= current.next;
   }
   return false;
}
//floydd loop detection 
// check if the list is empty 
// create slow and fast poimter 
// condition if the slow or fast pointer is pointing to the null 
// if not 
// iterate slow to slow ka slow ka next 
// if fast is not equal to the null
// iterate fast to fast the next 
// if slow === fast 
// return 1 loop detected 
// else return 0 loop not detected 
floyydetector(data){
    if(this.head===null){
        console.log("empty list");
    }
    let slow = this.head;
    let fast = this.head;
    
    while(slow!= null && fast != null){
        fast = fast.next;
        if(fast!=null){
            fast = fast.next;
        }
        slow = slow.next;
        if(slow === fast){
            return "loop detected";
        }
    }
    return "loop not detected";
}

//traverse and print the list 
traverse(){
    let current = this.head;
    while(current !== null){
        console.log(current.data);
        current = current.next;
    }
}
}

// b check if the list is empty or not 
// c . create a map which will take the value of the node nd info if the node is visited or not 
// d . if the node is visited then it will return true and if it is true we will point to the
// next node 
// e . if not we will return false 
//call a linkedlist
//create a linkedlist.
//call the linkedlist.
//traverse and print the linkedlist


const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
console.log("your linkedlist:");
list.traverse();
list.head.next.next.next = list.head.next;
console.log("loop", list.detectcycle());
console.log("detectedloop",list.floyydetector());
// //MAP 
// used to store key value pairs 
// key can be of any type objects, functions and primitives 
// features:
// maintains order in which elements are added.
// key can be of any type
// fast insertion deletion n retrieval operations
// .set()
// add key-value pairs throgh set method
// .get()
// used to access values from the map 
// .has()
// check if the value is present in the map
// example:
const myMap = new Map();
myMap.set('1','v1');
myMap.set('2','v2');
myMap.set('3','v3');
console.log(myMap.get('1'));
