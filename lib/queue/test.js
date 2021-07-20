
const assert = require("assert");
const naive = require("./naive");
const opt = require("./queue");

const test = (obj) => {
	let d = new Date();
	for (let i = 0; i < 100000; i++) obj.push(i);
	for (let i = 0; i < 100000; i++) assert(obj.pop() === i);
	let estimate = new Date() - d;
	console.log(`${estimate / 1000}s`);
};

module.exports = () => {
	process.stdout.write("Implement with Array: ");
	test(new naive());
	process.stdout.write("Implement with Object: ");
	test(new opt());
};
