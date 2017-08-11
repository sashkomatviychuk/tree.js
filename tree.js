function getChildren(list, id, idKey, parentKey) {
	const res = [];

	if (!list) return [];

	for (let i in list) {
		if (list[i][parentKey] !== id) continue;

		const item = JSON.parse(JSON.stringify(list[i]));
		item.children = getChildren(list, item[idKey], idKey, parentKey);
		res.push(item);
	}

	return res;
}

module.exports = (_list, idKey = '_id', parentKey = '_parent') => getChildren(_list, null, idKey, parentKey);