export function calcMaxDimensions({
	parent,
	child
}: {
	parent: { width: number; height: number };
	child: { width: number; height: number };
}) {
	const parentAspectRatio = parent.width / parent.height;
	const childAspectRatio = child.width / child.height;

	let maxWidth: number, maxHeight: number;

	if (childAspectRatio > parentAspectRatio) {
		maxWidth = parent.width;
		maxHeight = maxWidth / childAspectRatio;
	} else {
		maxHeight = parent.height;
		maxWidth = maxHeight * childAspectRatio;
	}

	return { width: maxWidth, height: maxHeight };
}
