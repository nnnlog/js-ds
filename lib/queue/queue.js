class Queue {
	constructor() {
		this.array = {};
		this.base = 0;
		this.end = -1;
	}
	push(element) {
		this.array[++this.end] = element;
	}
	pop() {
		if (this.empty()) throw new Error("Empty Queue");
		let ret = this.array[this.base];
		delete this.array[this.base++];
		return ret;
	}
	size() {
		return this.end - this.base + 1;
	}
	empty() {
		return this.size() === 0;
	}
}

module.exports = Queue;
