import { images } from '^assets/images';
import type { PortfolioData } from './_types';

export const paintings: PortfolioData = {
	title: 'Paintings',
	description:
		"Alesh Compton's paintings are centered around the trace which can be defined as a mark, an object or other indication of the existence or passing of something. Traces that are left from interactions allude to moments but not necessarily a final product. These Gutai-inspired action paintings are accompanied by videos leaving room for the viewer to imagine the circumstances under which the artworks were born.<br /> <br /> This painting series was made in Paris at the DSXL artist residency and was shown in January of 2021 in an exhibition titled 'un Oueff Dur' .The videos were also screened separate to the paintings in Glasgow, June 2021 as part of the Alternative Degree show at SWG3.<br /> <br /> DATE NIGHT<br /> A painting exploring the dynamics of a date scenario.<br /> Acrylic on canvas applied via paint cannon (fabricated by Ned Prizeman)160x400<br /> <br /> RUNNING MAN<br /> A trace left from the act of Running.<br /> Acrylic on canvas applied via paint cannon (fabricated by Ned Prizeman)260x350<br /> <br /> FRIED EGGZ<br /> A trace left from the act of frying an egg.<br /> Acrylic on Canvas260x280<br /> <br /> GLASS HALF FULL/EMPTY<br /> An attempt to fill a glass whilst the rain washes it away.<br /> Oil &amp; Acrylic on Canvas260x310",
	media: Object.values(images.paintings).map((image) => ({ image, type: 'image' }))
};
