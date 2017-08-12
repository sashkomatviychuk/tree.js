const assert = require('chai').assert;
const expect = require('chai').expect;

const listToTree = require('./index');

describe('List to tree tests', () => {
	it('listToTree should be a function', () => assert(listToTree instanceof Function));

	it('Should throw an error, if second arg is not a string', () => {
		expect(listToTree.bind(null, [], null)).to.throw(Error);
	});

	it('Should throw an error, if first arg is not an array', () => {
		expect(listToTree).to.throw(Error);
	});

	it('Should return tree', () => {
		const list = [{
			_id: 1,
			_parent: null,
			prop: 'qwerty',
		}, {
			_id: 2,
			_parent: 1,
			prop: 'asdfg',
		}, {
			_id: 3,
			_parent: null,
			prop: '13sdf',
		}];

		const expectedResult = [{
			_id: 1,
			_parent: null,
			prop: 'qwerty',
			children: [{
				_id: 2,
				_parent: 1,
				prop: 'asdfg',
				children: [],
			}]
		}, {
			_id: 3,
			_parent: null,
			prop: '13sdf',
			children: [],
		}]

		const tree = listToTree(list);

		expect(tree).to.deep.equal(expectedResult);
	});

	it('Should return an empty array, if id prop is not defined, but all parent props are defined', () => {
		const list = [{
			_parent: 1,
			prop: 'qwerty',
		}, {
			_parent: 2,
			prop: 'asdfg',
		}, {
			_parent: 3,
			prop: '13sdf',
		}];

		const tree = listToTree(list);

		expect(tree).to.deep.equal([]);
	});

	it('Should return only elements with no parent or empty parent, if id prop is not defined', () => {
		const list = [{
			_parent: null,
			prop: 'qwerty',
		}, {
			_parent: 2,
			prop: 'asdfg',
		}, {
			prop: '13sdf',
		}];

		const expectedResult = [{
			_parent: null,
			prop: 'qwerty',
		}, {
			prop: '13sdf',
		}];

		const tree = listToTree(list);

		expect(tree).to.deep.equal(expectedResult);
	});
});