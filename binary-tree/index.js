class BinaryTree {
  constructor(root) {
    this.root = root;
    this.right = null;
    this.left = null;
  }

  add(value) {
    if (value >= this.root) {
      // go to the right
      if (this.right === null) {
        this.right = new BinaryTree(value);
        return;
      }

      this.right.add(value);
    } else {
      // go to the left
      if (this.left === null) {
        this.left = new BinaryTree(value);
        return;
      }
      this.left.add(value);
    }
  }

  print() {
    console.log(JSON.stringify(this, null, 2));
  }

  find(value) {
    if (this.root === value) return this;
    if (value >= this.root && this.right !== null) {
      return this.right.find(value);
    } else if (this.left !== null) {
      return this.left.find(value);
    } else {
      return null;
    }
  }
  
  remove() {
    // 1) Deleting the root
    // 2) No left branch
    // 3) No right branch
    // 4) Leaf node
  }
}

let bintree = new BinaryTree(4);
bintree.add(9);
bintree.add(2);
bintree.add(8);
bintree.add(6);
bintree.add(3);
bintree.add(10);
bintree.print();
console.log("Finding 6...");
console.log(bintree.find(2));
