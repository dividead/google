class List {
  constructor() {
    this.head = null;
  }

  push(val) {
    const node = { val, next: this.head };
    this.head = node;
    console.log(this.str);
    return node;
  }

  pop() {
    if (!this.head) {
      return null;
    }
    const { val, next } = this.head;
    this.head = next;
    console.log(`${val} | ` + this.str);
    return val;
  }

  get str() {
    return [...this].join(' -> ');
  }

  *[Symbol.iterator]() {
    let n = this.head;
    while (n) {
      const x = n.val;
      n = n.next;
      yield x;
    }
  }
}

class VM {
  constructor() {
    this.stack = new List();
  }
  add(val) {
    switch (val) {
      case '+':
        this.plus();
        break;
      case '-':
        this.minus();
        break;
      default:
        this.stack.push(val);
    }
  }
  plus() {
    const a = this.stack.pop();
    const b = this.stack.pop();
    this.stack.push(b + a);
  }
  minus() {
    const a = this.stack.pop();
    const b = this.stack.pop();
    this.stack.push(b - a);
  }
}

// const vm = new VM();
// vm.add(2);
// vm.add(5);
// vm.add(8);
// vm.add('-');
// vm.add('+');


const parse = str => {
  let s = new VM();
  let ops = new List();
  let op = null;
  for (let c of str) {
    if (c === ' ') continue;
    if (c === '(') {
      op = null;
      continue;
    };
    if (c === ')') {
      s.add(ops.pop());
      continue;
    }
    if (!op) {
      ops.push(c);
      op = c;
    } else {
      s.add(+c);
    }
  }
};

parse('(+  2 (- 5 8))'); // 2 + (5 - 8) = -1