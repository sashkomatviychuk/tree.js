function getChildren(list, id, idKey, parentKey, isRoot) {
	const res = [];

	for (let i in list) {
		const item = list[i];

		if (isRoot && !item[idKey] && !item[parentKey]) {
			res.push(item);
			continue;
		}

		if (!item[parentKey] && !isRoot) continue;
		if (item[parentKey] && item[parentKey] !== id) continue;

		if (item[idKey]) {
			item.children = getChildren(list, item[idKey], idKey, parentKey, false);
		}

		res.push(item);
	}

	return res;
}

module.exports = (_list, idKey = '_id', parentKey = '_parent') => {
	if (!Array.isArray(_list)) throw new Error('First argument must be an array');
	return getChildren(JSON.parse(JSON.stringify(_list)), false, idKey, parentKey, true);
};