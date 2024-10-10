export const getYoutubeVideoIdFromUrl = (url: string) => {
	// eslint-disable-next-line no-useless-escape
	const regex = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
	const match = url.match(regex);

	if (!match) {
		return null;
	}

	const id = match[1];

	return id;
};


// https://www.youtube.com/embed/bCWLp6D7WHg
export const getYoutubeEmbedUrlFromId = (id: string) => {
	const embedUrl = `https://www.youtube.com/embed/${id}`;

	return embedUrl;
};

export const getYoutubeEmbedFromUrl = (url: string) => {
	const id = getYoutubeVideoIdFromUrl(url) as string;

	const embedUrl = getYoutubeEmbedUrlFromId(id);

	return embedUrl;
};

export function getYouTubeEmbedUrl(url: string): string | null {
	const standardVideoRegex = /youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/;
	const shortVideoRegex = /youtube\.com\/shorts\/([a-zA-Z0-9_-]+)/;

	const match = url.match(standardVideoRegex) || url.match(shortVideoRegex);

	if (match && match[1]) {
		return `https://www.youtube.com/embed/${match[1]}`;
	}

	return null;  // Return null if the URL is not valid
}


export const getThumbnailFromYoutubeId = (id: string): string =>
	`https://img.youtube.com/vi/${id}/hqdefault.jpg`;
