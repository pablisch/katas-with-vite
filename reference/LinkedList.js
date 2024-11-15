export class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

export class LinkedList {
  constructor() {
    this._head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    const node = new Node(value);

    node.next = this._head;
    this._head = node;
    this.size++;

    // return this;
    return node;
  }

  append(value) {
    const node = new Node(value);

    // if list is empty, make head
    if (!this._head) {
      this._head = node;
      this.size++;

      // return this;
      return node;
    }

    // set current to head and iterate through list
    let current = this._head;

    while (current.next) {
      current = current.next;
    }

    // having found the last node, set its next to be the new node
    current.next = node;
    this.size++;

    // return this;
    return node;
  }

  insertAt(value, index) {
    // if index is out of range, return out of method
    if (index < 0 || index > this.size) {
      return null;
    }

    // if first index, prepend the node
    if (index === 0) {
      const node = this.prepend(value);
      return node;
    }

    if (index === this.size) {
      const node = this.append(value);
      return node;
    }

    const node = new Node(value);

    // set current to head and iterate through list until current is the node before the index
    let current = this._head;

    for (let i = 1; i < index; i++) {
      current = current.next;
    }

    // FIRST, set the new node's next to be the current node's next, 
    node.next = current.next;
    // THEN set the current node's next to be the new node. This ORDER is important.
    current.next = node;
    this.size++;

    // return this;
    return node;
  }

  deleteAt(index) {
    if (index < 0 || index >= this.size) {
      return 'No node exists in that range.';
    }

    if (index === 0) {
      const deletedValue = this._head.value;
      this._head = this._head.next;
      this.size--;
      return deletedValue;
    }

    let current = this._head;

    // iterate to the node before the desired index
    for (let i = 1; i < index; i++) {
      current = current.next;
    }

    const deletedValue = current.next.value;
    // setting the current.next to the one after next effectively removes the node between
    current.next = current.next.next;
    this.size--;
    return deletedValue;
  }

  deleteValue(value) {
    // if list is empty, return out of method
    if (!this._head) {
      return 'List is empty.';
    }

    // if first node is the value, delete it
    if (this._head.value === value) {
      this._head = this._head.next;
      this.size--;
      return `value ${value} at index 0 was deleted.`;
    }

    let current = this._head;

    // iterate through list until value is found
    let i = 1;
    while (current.next) {
      if (current.next.value === value) {
        // setting the current.next to the one after next effectively removes the node between
        current.next = current.next.next;
        this.size--;
        return `value ${value} at index ${i} was deleted.`;
      }
      current = current.next;
      i++;
    }

    return 'Value not found.';
  }

  print() {
    let current = this._head;
    let listValues = '';

    while (current) {
      listValues += `${current.value} -> `;
      current = current.next;
    }

    return `${listValues}null`;
  }
}

const node = new Node(5);
// console.log('node', node);

const list = new LinkedList();
// console.log(list.isEmpty());
// console.log(list.getSize());
// console.log(list.prepend(5));
// console.log(list.prepend(4));
// console.log(list.prepend(3));
// console.log(list.append(7));
// console.log(list.append(8));
// console.log(list.insertAt(6, 3));
// console.log(list.insertAt(2, 0));
// console.log(list.insertAt(9, 7));
// console.log(list.deleteAt(0));
// console.log(list.deleteAt(3));
// console.log(list.deleteAt(3));
// console.log(list.deleteAt(4));
// console.log(list.deleteAt(4));
// console.log(list.deleteValue(3));
// console.log(list.deleteValue(5));
// console.log(list.print());
// console.log(list.value)
// if (index < 0 || index > this.size) {}