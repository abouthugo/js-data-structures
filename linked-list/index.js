function Node(value = 0, next = null){

  this.value = value;
  this.next = next;

}


class LinkedList {
  
  constructor(){
    this.size = 0;
  }


  add(value){
    if(this.size < 1){
      this.head = new Node(value);
      this.size++;
    }else {
      let next = this.head;
      while(next.next !== null){
        next = next.next;
      }
      next.next = new Node(value);
      this.size++;
    }
  }

  remove(value){
    if(this.size < 1){
      return false;
    }

    
    if(this.head.value === value){
      this.head = this.head.next;
      this.size--;
      return true;
    }
    let prev = this.head;
    let next = prev.next;
    while(next.next !== null && next.value !== value){
      prev = prev.next;
      next = next.next;
    }
    if(next.value === value){
      prev.next = next.next;
      this.size--;
      return true;
    }else {
      return false;
    }
  }

  get _size() {
    return this.size;
  }

  get _head(){
    return this.head.value;
  }

  get rear(){
    let next = this.head.next;
    while(next.next !== null){
      next = next.next;
    }
    return next.value;
  }

  print(){
    console.log(JSON.stringify(this.head, null, 4) + " size: " + this.size);
  }



}


let ll = new LinkedList();
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);
ll.print();
ll.remove(1);
ll.print();
ll.remove(4);
ll.print();

