import { images } from '^assets/images';
import type { PortfolioData } from './_types';

export const brexit: PortfolioData = {
	title: 'Brexit Breakdown',
	description:
		"Documentary shot in 2019 in the build up to the UK's Brexit Referendum. The Interviews took place in England, Northern Ireland and Scotland to give a representative consensus of what everyday people on the street’s opinion were on the referendum. The video was released and screened in the CCA, Glasgow on the 10 December 2019 just days before the United Kingdom general election in which the conservative party were re-elected with a majority of 60 seats.",
	media: [
		{
			type: 'youtube-video',
			url: 'https://youtu.be/eqUTJjalsRw',
			image: images.brexit.brexit_doc_yt_thumbnail
		}
	]
};
