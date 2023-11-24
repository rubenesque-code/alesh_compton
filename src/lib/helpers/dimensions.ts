export function calcMaxDimensions({
	transformContainer,
	initial
}: {
	transformContainer: { width: number; height: number };
	initial: { width: number; height: number };
}) {
	const parentAspectRatio = transformContainer.width / transformContainer.height;
	const childAspectRatio = initial.width / initial.height;

	let maxWidth: number, maxHeight: number;

	if (childAspectRatio > parentAspectRatio) {
		maxWidth = transformContainer.width;
		maxHeight = maxWidth / childAspectRatio;
	} else {
		maxHeight = transformContainer.height;
		maxWidth = maxHeight * childAspectRatio;
	}

	return { width: maxWidth, height: maxHeight };
}
