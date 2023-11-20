import { writable } from 'svelte/store';

type PageLayoutValues = {
	headerHeight: number | null;
	scrollTopPrevious: number | null;
	scrollTopCurrent: number;
};

const initData: PageLayoutValues = {
	headerHeight: null,
	scrollTopPrevious: null,
	scrollTopCurrent: 0
};

const pageLayoutValuesStore = writable(initData);

function updateHelper<TField extends keyof PageLayoutValues>(
	field: TField,
	value: PageLayoutValues[TField]
) {
	pageLayoutValuesStore.update((state) => {
		return {
			...state,
			[field]: value
		};
	});
}

const updatePageLayoutValue = {
	headerHeight: (value: number) => updateHelper('headerHeight', value),

	scrollTopPrevious: (value: number) => updateHelper('scrollTopPrevious', value),

	scrollTopCurrent: (value: number) => updateHelper('scrollTopCurrent', value)
};

export { type PageLayoutValues, pageLayoutValuesStore, updatePageLayoutValue };
