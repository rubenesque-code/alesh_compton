import { writable } from 'svelte/store';

type StoreVideoState = {
	paused: boolean;
};

const initData: StoreVideoState = {
	paused: true
};

const storeVideoStore = writable(initData);

const updateStoreVideo = {
	togglePause: () =>
		storeVideoStore.update((state) => {
			return {
				paused: state.paused === true ? false : true
			};
		})
};

export { type StoreVideoState, storeVideoStore, updateStoreVideo };
