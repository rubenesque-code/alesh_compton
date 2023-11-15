import { images } from '$lib/assets/images';
import type { PortfolioData } from './_types';

// const imagesProcessed_1 = images.squatumentary.map((image) => ({ type: 'image', image }) as const);
// const imagesSplitSections = splitArrIntoTwo(imagesProcessed_1, 10);

export const squatumentary: PortfolioData = {
	title: 'Squatumentary',
	description:
		'Squatumentary is a 124min documentary filmed during the pandemic at the DSXL, a squat on the outskirts of Paris.<br /><br/> Navigating between the challenges of collective decision making and the personal relationships formed withing the squat, the video gives insight into the everyday living outside of conventional society. From collectively organized meals for refugees, to secret lockdown parties and international-scale dance battles, &ldquo;Squatumentary&rdquo; gives a multifaceted picture of what it is like to live in a repurposed space. The film reflects on the impact the squat had on its environment, as well as the artist&rsquo;s personal experience of community lifestyle.<br /><br/> As a place of constant change, DSXL at times housed as many as 32 residents and in other times, as few as 2. Editing down from over 70 hours of footage, the film is a document of how the community changes and develops through its time before they were expulsed and forced to find new living spaces.<br /><br/> SQUATUMENTARY was premiered at a solo exhibition at the side gallery in Kyoto, Japan from 17/10/2022 - 30/10/2022 and went on to be screened at A.K.A Gallery and Datsuijo in Tokyo.<br/><br/><br/> Squatumentary』は、パリ郊外のスクワット「DSXL」でパンデミック中に撮影された124分のドキュメンタリーである。<br/><br/> 集団的な意思決定の難しさと、スクワット内で形成される個人的な関係の間を行き来しながら、このビデオは、従来の社会から外れた日常生活についての洞察を与えてくれる。難民のために集団で組織された食事会から、秘密の監禁パーティー、国際的な規模のダンスまで、『スクワットメンタリー』は、再利用された空間で暮らすとはどういうことかを多面的に描いている。この映画は、スクワットが環境に与えた影響と、アーティストの個人的なコミュニティ・ライフスタイルの経験を反映している。<br/><br/> 70時間を超える映像から編集されたこの映画は、コミュニティがどのように変化し、発展していくかを、彼らが暴露され、新たな居住空間を見つけざるを得なくなるまでの時間を通して記録したものである。<br/><br/> Squatumetary』は、2022年10月17日から30日まで京都のside galleryで開催された個展で初公開され、その後、東京のA.K.A GalleryとDatsuijoでも上映された。',
	media: [
		{ image: images.squatumentary[1], type: 'image' },
		{
			type: 'youtube-video',
			url: 'https://www.youtube.com/watch?v=3DqNM-n4j2M',
			image: images.squatumentary.squatumentary_doc_yt_thumbnail
		}
	]
};
