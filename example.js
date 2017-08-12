const makeTree = require('./index');

const list = [
	{
		_id: 1,
		_parent: null,
		text: '123',
	},
	{
		_id: 2,
		_parent: 1,
		text: '22222',
	},
	{
		_id: 3,
		_parent: 2,
		text: '333333',
	},
	{
		_id: 4,
		_parent: null,
		text: '123 4',
	},
	{
		_id: 5,
		_parent: 4,
		text: '123 4',
	},
	{
		_id: 6,
		_parent: 5,
		text: '123 4',
	},
	{
		_id: 7,
		_parent: 6,
		text: '123 4',
	},
	{
		_id: 8,
		_parent: 7,
		text: '123 4',
	},
	{
		_id: 9,
		_parent: 7,
		text: '123 4',
	},
	{
		_id: 10,
		_parent: 7,
		text: '123 4',
	},
];

console.time('tree built in');
const tree = makeTree(list)
// const tree = makeTree([null, '', false, undefined, [], NaN])
// console.log(JSON.stringify(tree, null, 2));
console.timeEnd('tree built in');