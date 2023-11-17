import { images } from '^assets/images';
import type { PortfolioData } from './_types';

export const painters_touch: PortfolioData = {
	title: 'Painters Touch - Mary Lydon',
	description:
		'On 17/03/2020 Mary Lydon painted a mural at the abandoned Lennox Castle in Scotland. The Video follows Mary as she describes her relationship between music and painting.<br/><br/>Sound by Ralph Taylor',
	media: [
		{
			type: 'youtube-video',
			url: 'https://youtu.be/w_Cd-Di-uoc',
			image: images.painters_touch.painters_touch_yt_thumbnail
		},
		{ image: images.painters_touch[1], type: 'image' },
		{ image: images.painters_touch[2], type: 'image' },
		{ image: images.painters_touch[3], type: 'image' },
		{ image: images.painters_touch[4], type: 'image' },
		{ image: images.painters_touch[5], type: 'image' },
		{ image: images.painters_touch[6], type: 'image' }
	]
};
