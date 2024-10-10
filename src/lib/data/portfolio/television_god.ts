import { images } from '^assets/images';

import type { PortfolioData } from './_types';

export const television_god: PortfolioData = {
	title: 'Television God',
	description:
		'This is a collaborative piece with Ned Prizeman. A towering sculpture made from wood, steel, televisions and motors creating a sinister digital character personifying an internet based organism . With this multi faceted  imaginary it has a hyper digital emotions alongside analogue physical factors.<br/><br/>2021<br /><br /><br />ネッド・プライズマンとのコラボレーション作品です。木材、鋼鉄、テレビ、モーターで作られたそびえ立つ彫刻は、インターネット ベースの生命体を擬人化した邪悪なデジタル キャラクターを作り出しています。この多面的な想像では、アナログの物理的要素とともに、ハイパーデジタルな感情が含まれています。 鋼鉄 木材 モニター モーター 2021年',
	media: [
		{
			type: 'youtube-video',
			url: 'https://youtu.be/RI1IhCPgt-E',
			image: images.television_god.television_god_yt_thumbnail
		},
		{ image: images.television_god[1], type: 'image' },
		{ image: images.television_god[2], type: 'image' },
		{ image: images.television_god[3], type: 'image' },
		{ image: images.television_god[4], type: 'image' },
		{ image: images.television_god[5], type: 'image' },
		{ image: images.television_god[6], type: 'image' },
		{ image: images.television_god[7], type: 'image' },
		{ image: images.television_god[8], type: 'image' },
		{ image: images.television_god[9], type: 'image' },
		{ image: images.television_god[10], type: 'image' }
	]
};
