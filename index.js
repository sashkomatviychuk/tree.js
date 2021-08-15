function getChildren(list, id, idGetter, parentGetter, isRoot) {
	const res = [];

	for (let i in list) {
		const item = list[i];
		const itemId = idGetter(item);
		const itemParent = parentGetter(item);

		if (!item || '[object Object]' !== item.toString()) continue;

		if (isRoot && !itemId && !itemParent) {
			res.push(item);
			continue;
		}

		if (itemParent && itemParent !== id || !itemParent && !isRoot) continue;

		if (itemId) {
			item.children = getChildren(list, itemId, idGetter, parentGetter, false);
		}

		res.push(item);
	}

	return res;
}

module.exports = (_list, idGetter, parentGetter) => {
	if (!Array.isArray(_list)) {
		throw new Error('First argument must be an array');
	}
	return getChildren(JSON.parse(JSON.stringify(_list)), false, idGetter, parentGetter, true);
};