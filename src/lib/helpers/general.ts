export function splitArrIntoTwo<TItem extends Record<string, unknown>>(
	arr: TItem[],
	index: number
) {
	const first = arr.slice(0, index);
	const second = arr.slice(index + 1);

	return [first, second];
}
