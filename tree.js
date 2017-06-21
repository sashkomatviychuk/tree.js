const clone = (obj) => JSON.parse(JSON.stringify(obj));

function getChildren(list, id, idKey, parentKey) {
	const res = [];

	for (let i in list) {
		if (list[i][parentKey] === id) {
			const item = clone(list[i]);
			item.children = getChildren(list, item[idKey], idKey, parentKey);
			delete item[parentKey];
			res.push(item);
		}
	}

	return res;
}

module.exports = function makeTree(_list, idKey = '_id', parentKey = '_parent') {
	const list = clone(_list);
	const roots = [];
	let i = 0;

	while (i < list.length) {
		if (!list[i][parentKey]) {
			const item = list.splice(i, 1)[0];
			delete item[parentKey];
			roots.push(item);
		} else {
			++i;
		}
	}

	const rootsLength = roots.length;

	for (i = 0; i < rootsLength; ++i) {
		roots[i].children = getChildren(list, roots[i][idKey], idKey, parentKey);
	}

	return roots;
}