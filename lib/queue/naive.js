class Queue {
	constructor() {
		this.array = [];
	}
	push(element) {
		this.array.push(element);
	}
	pop() {
		return this.array.shift();
	}
}

module.exports = Queue;
