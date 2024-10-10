import { images } from '^assets/images';
import type { PortfolioData } from './_types';

export const brexit: PortfolioData = {
	title: 'Brexit Breakdown',
	description:
		"Documentary shot in 2019 in the build up to the UK's Brexit Referendum. The Interviews took place in England, Northern Ireland and Scotland to give a representative consensus of what everyday people on the street’s opinion were on the referendum. The video was released and screened in the CCA, Glasgow on the 10 December 2019 just days before the United Kingdom general election in which the conservative party were re-elected with a majority of 60 seats.<br /><br /><br />2019年に英国のEU離脱国民投票に向けて撮影されたドキュメンタリー。インタビューはイングランド、北アイルランド、スコットランドで行われ、住民投票に対する街頭の一般人の意見についての代表的なコンセンサスを得ることができました。このビデオは、保守党が過半数の60議席を獲得して再選された英国総選挙の数日前の2019年12月10日にグラスゴーのCCAで公開され上映された。",
	media: [
		{
			type: 'youtube-video',
			url: 'https://youtu.be/eqUTJjalsRw',
			image: images.brexit.brexit_doc_yt_thumbnail
		}
	]
};
