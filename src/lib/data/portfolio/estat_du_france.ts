import { images } from '^assets/images';
import type { PortfolioData } from './_types';

export const estat_du_france: PortfolioData = {
	title: 'Le estat du France Actuel',
	description:
		'Shot in December 2018 this documentary explores the gilets jaunes movement through interviews performed on the streets of Paris. The movement was named “gilets jaunes” (yellow vests) because protesters wear fluorescent yellow high-vis jackets. The movement, which began as a fuel tax protest morphed into a wider anti-government protest. Alesh Compton goes to find out first hand what the people of Paris had to say about the movement.<br /><br /><br />2018 年 12 月に撮影されたこのドキュメンタリーは、パリの路上で行われたインタビューを通じてジレ ジョーヌ運動を探求しています。デモ参加者が蛍光黄色の高視認性ジャケットを着ていることから、この運動は「ジレ・ジョーヌ」（黄色いベスト）と名付けられた。燃料税に対する抗議活動として始まったこの運動は、より広範な反政府抗議活動へと変化した。アレシュ・コンプトンは、パリの人々がこの運動について何を言ったかを直接聞きに行きます',
	media: [
		{
			type: 'youtube-video',
			url: 'https://youtu.be/aydddY4U87k',
			image: images.estat_du_france.estat_du_france_doc_yt_thumbnail
		}
	]
};
