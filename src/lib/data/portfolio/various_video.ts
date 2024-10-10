import { images } from '^assets/images';
import type { PortfolioData } from './_types';

export const various_video: PortfolioData = {
	title: 'Various Video',
	description: '',
	media: [
		{
			type: 'youtube-video',
			url: 'https://www.youtube.com/watch?v=DzHe2JBLGUg',
			image: images.various_video.nekkuro_hana_yt_thumbnail
		},

		{
			type: 'youtube-video',
			url: 'https://youtu.be/AqWI1bmZf4U',
			image: images.various_video.stroll_through_peckham_yt_thumbnail
		},
		{
			type: 'youtube-video',
			url: 'https://www.youtube.com/watch?v=eSLd-ZOwXB4',
			image: images.various_video.slimey_skumbaagz_yt_thumbnail
		},
		{
			type: 'youtube-video',
			url: 'https://youtu.be/2OLpbUdwcjw?si=k9FkmVO4Hr4sybpI',
			image: images.various_video.roam_ii
		},
		{
			type: 'youtube-video',
			url: 'https://youtu.be/kz_RFnhKheA',
			image: images.various_video.kurukuru_yt_thumbnail
		},
		{
			type: 'youtube-video',
			url: 'https://youtu.be/AV-6HVc1KRk',
			image: images.various_video.midnight_yt_thumbnail
		},
		{
			type: 'youtube-video',
			url: 'https://youtu.be/IlbYlI4Qjy0',
			image: images.various_video.almost_yt_thumbnail
		}
	]
};
