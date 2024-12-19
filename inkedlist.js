/******************************************************************************
Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
class Node{  // for linkedlist first declare node class fro storing values and data of th e curreent nodes
    constructor(data){  // to take data of the objects being declares
        this.data = data; // this pointer to take data of the current node at this instance
        this.next = null;
    }
}

    class LinkedList{ // to make the list
        constructor(){
            this.head = null; // starting with the empty list 
        }
    
    add(data) { // to add nodes to the list 
        const newNode = new Node(data); // create new node
        if(this.head === null){ // check if the list is empty 
            this.head = newNode; // if the list is empty then let the current head node be the new node
        }
        else{
            let current = this.head; // if not 
            if(current.next !== null){ // iff current ka next is not pointingnull
                current = current.next; // then current would be equal to current ka next 
            }
            current.next = newNode; //store the newnode into currents next
        }
    }
    addnodeatthehead(data){ //take data to be added in the new node 
        const newNode = new Node(data); //declare newnode 
        newNode.next = this.head;
        this.head = newNode;
    }
    addatanypostion(n,data){
        const newNode = new Node(data);
        //handle edgecaseif n=1
        if(n===1||this.head===null){
            newNode.next = this.head;
            this.head= newNode;
            return;
        }
        let current = this.head;
        let count = 1;
        //traverse to each postion up to n-1
        while(current!==null && count<n-1){
            current = current.next;
            count++
        } 
        //if the current is null
        if(current===null){
            console.log("postionoutofbounds");
            return;
        }
        //to insert new node 
        newNode.next= current.next;
        current.next = newNode;
        
    }
    deletenode(value){
        if(this.head===null){
            console.log("thelistisempty");
            return; //here we are adding return because we want to stop the flow 
        }
        //deletetheheadnode
        if(this.head.data === value){
            this.head = this.head.next;
            return;
        }
        //delete the node based on the comparison between data's
        let current = this.head;//for the beginning of the traversal
        let previous = null;
        while(current!==null && current.data!==value){
            previous = current;
            current = current.next; //here we are not adding return because we want traversal to continue
        }
        //nodetobedeletedisnotfound i.e the next node is null
        if(current.next === null){
            console.log("node not found");
            return;
        }
        //delete node from the tail
        if(current.next === null){
            previous.next = null;
            return;
        }
        //deleting the node
        previous.next = current.next;
    }
    deleteTail ( ){
        curr = head ; 
        while(curr.next.next!=null && curr.next !=null ) curr = curr.next ;
        if(curr.next==null) curr = null ; 
        else curr.next = null ; 
    }
  traverse(){
      let current = this.head; // start from the head
      while(current!== null){ // if the head node is not null
          console.log(current.data); // just print current ka data
          current = current.next; // then current becomes current ka next
      }
  }
    }
    
const list = new LinkedList(); // create the new linkedlist

// list.add(1);
// list.add(9);
// list.add(12);
// list.addnodeatthehead(3);
// list.addnodeatthehead(2);
// list.addnodeatthehead(2);
list.addatanypostion(1,3);
list.addatanypostion(2,4);
list.addatanypostion(3,4);
list.addatanypostion(4,5);
list.deletenode(5);


console.log("traversed LinkedList:");
list.traverse(); 

///RETURN 
//return is a keyword in programming used to 
//end a programe to the place from where the function is called 
//return a value from a program (like return a+b)
//thats why add return to control flow otherwise the programme will keep on flowing.



//FAST AND SLOW POINTERS IN A LINKEDLIST 
//fast pointer = takes two steps
//slpw pointer = takes one step at a time.
// effiecient traversal = 0(n) complexity 
// when the fast pointer reaches end of the list the slow pointer would be midway to that list
// the fast pointer will forsure overlap the slow pointer 
//APPLICATIONS
// find the middle of the LL ;- slow pointer will point at the middle while fast pointer would 
// reach at the end
//detecting cycles in LL :- if theres a cycle , the faaster pointer will eventually meet the slow one
//finding the start of the cycle :- after detecting the ccyle we can use fast pomter to detect 
// the starting of the node 
//check if the ll is odd or even length ;- if the fast pointer == null then event 
//else odd 

