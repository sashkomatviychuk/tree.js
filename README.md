# tree.js
Build tree from list using id key and parent key. Default id key value is \_id, parent key - \_parent

## Install
Install with npm
```bash
npm install list-to-tree2
```
Install with yarn
```bash
yarn add list-to-tree2
```
## Tests
```bash
npm test
```
## Usage
Also you can open example.js to see usage
```javascript
const listToTree = require('list-to-tree2');
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
    
const tree = listToTree(list);
```
### Parameters
- list - Array of objects with Id key and parentId key. Required
- idKey - Name of id key in list elements. Default - \_id
- parentKey - Name of parentId key. Default  - \_parent
