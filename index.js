function getChildren(list, id, idKey, parentKey, isRoot) {
	const res = [];

	for (let i in list) {
		const item = list[i];
		const itemId = item[idKey];
		const itemParent = item[parentKey];

		if (!item || '[object Object]' !== item.toString()) continue;

		if (isRoot && !itemId && !itemParent) {
			res.push(item);
			continue;
		}

		if (itemParent && itemParent !== id || !itemParent && !isRoot) continue;

		if (itemId) {
			item.children = getChildren(list, itemId, idKey, parentKey, false);
		}

		res.push(item);
	}

	return res;
}

module.exports = (_list, idKey = '_id', parentKey = '_parent') => {
	if (typeof idKey === 'string' && typeof parentKey === 'string') {
		if (Array.isArray(_list)) {
			return getChildren(JSON.parse(JSON.stringify(_list)), false, idKey, parentKey, true);
		}

		throw new Error('First argument must be an array');
	}

	throw new Error('Id key and parent key must be a string');
};