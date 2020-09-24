const nthFromEnd = (head,n) => {
    var current = head

    let i = 0;
    while(current){
        i++
        current = current.next;
    }
    
    let nthFromStart = i - (n - 1)
    i = 0
    current = head
    while(i < nthFromStart-1){
        current = current.next
        i++
    }
    return current
}

class Node{
    constructor(element){
        this.element = element
        this.next = null
    }
}

class LinkedList{

    constructor(){
        this.head = null
        this.size = 0
    }

    add(element){
        var node = new Node(element)
        if(!this.head){
            this.head = node
        }
        else{
            var current = this.head
            while(current.next){
                current = current.next
            }
            current.next = node
        }
        this.size++;
    }

}

const list = new LinkedList()
list.add(1)
list.add(2)
list.add(3)
list.add(4)
list.add(5)
console.log(nthFromEnd(list.head,2))