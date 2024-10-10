import { images } from '^assets/images';
import type { PortfolioData } from './_types';

export const various_video: PortfolioData = {
	title: 'Various Video',
	description: '',
	media: [
		{
			type: 'youtube-video',
			url: 'https://www.youtube.com/watch?v=DzHe2JBLGUg',
			image: images.various_video.nekkuro_hana_yt_thumbnail,
			title: 'Nekkuro Hanna, Negev'
		},

		{
			type: 'youtube-video',
			url: 'https://www.youtube.com/shorts/bCWLp6D7WHg',
			image: images.various_video.tv_god_head_yt_thumbnail,
			title: 'Television God Head',
			isShort: true
		},

		{
			type: 'youtube-video',
			url: 'https://youtu.be/AqWI1bmZf4U',
			image: images.various_video.stroll_through_peckham_yt_thumbnail,
			title: 'Stroll through Peckham'
		},

		{
			type: 'youtube-video',
			url: 'https://www.youtube.com/watch?v=eSLd-ZOwXB4',
			image: images.various_video.slimey_skumbaagz_yt_thumbnail,
			title: 'Slimey Skumbaggz - DaBadGuyz'
		},

		{
			type: 'youtube-video',
			url: 'https://youtu.be/2OLpbUdwcjw?si=k9FkmVO4Hr4sybpI',
			image: images.various_video.roam_ii,
			title: 'Roam II'
		},

		{
			type: 'youtube-video',
			url: 'https://youtu.be/kz_RFnhKheA',
			image: images.various_video.kurukuru_yt_thumbnail,
			title: 'Kurukuru PA'
		},

		{
			type: 'youtube-video',
			url: 'https://youtu.be/AV-6HVc1KRk',
			image: images.various_video.midnight_yt_thumbnail,
			title: 'Midnight in Kelvingrove'
		},

		{
			type: 'youtube-video',
			url: 'https://youtu.be/IlbYlI4Qjy0',
			image: images.various_video.almost_yt_thumbnail,
			title: 'Almost Strawberry Jam'
		}
	]
};

