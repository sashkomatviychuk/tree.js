const makeTree = require('./tree');
const tr = makeTree(
	[
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
	]
)

console.log(JSON.stringify(tr, null, 2));