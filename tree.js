function getChildren(list, id, idKey, parentKey) {
	const res = [];

	for (let i in list) {
		if (list[i][parentKey] === id) {
			let item = list[i];
			item.children = getChildren(list, item[idKey], idKey, parentKey);
			res.push(item);
		}
	}

	return res;
}

module.exports = function makeTree(list, idKey = '_id', parentKey = '_parent') {
	const roots = [];
	let i = 0;

	while (i < list.length) {
		if (!list[i][parentKey]) {
			roots.push(list.splice(i, 1)[0]);
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