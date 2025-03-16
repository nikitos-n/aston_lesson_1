class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }
    this.size++;
  }

  remove(value) {
    if (!this.head) return false;

    let current = this.head;
    let previous = null;

    while (current && current.value !== value) {
      previous = current;
      current = current.next;
    }

    if (!current) {
      return false;
    }
    if (previous) {
      previous.next = current.next;
    } else {
      this.head = current.next;
    }

    if (!current.next) {
      this.tail = previous;
    }

    this.size--;
    return true;
  }

  find(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) return current;
      current = current.next;
    }
    return null;
  }

  getSize() {
    return this.size;
  }
}
