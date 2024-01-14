import { images } from '^assets/images';
import type { ImgMeta } from '^types';

export type Cloth = {
	id: string;
	description: string[];
	heading: ImgMeta;
	price: number | 'sold';
	size: string;
	pageImages: ImgMeta[];
	shopImage: ImgMeta;
	buyLink: string;
};

export const cloths: Cloth[] = [
	{
		id: 'polo-m3',
		description: [
			'REVERSE TO BREAK FREE OF CHAIN',
			'Cyanotype on Cotton, 1/1',
			'Gilden Heavyweight'
		],
		heading: images.shop.heading.polo,
		price: 'sold',
		// price: 35,
		size: 'M',
		pageImages: [images.shop.clothes.polo_m3_outside, images.shop.clothes.polo_m3_inside],
		shopImage: images.shop.clothes.polo_m3_outside,
		buyLink: 'https://buy.stripe.com/fZe3fq94x0Msfwk28a'
	},
	{
		id: 'chinos-xl1',
		description: ['CAN BE USED IN THE OFFICE/CLUB', 'Cyanotype, 1/1', 'DOCKERS CHINO'],
		heading: images.shop.heading.trouser,
		price: 80,
		size: 'XL - 36x32',
		pageImages: [images.shop.clothes.chinos_xl1_front, images.shop.clothes.chinos_xl1_rear],
		shopImage: images.shop.clothes.chinos_xl1_front,
		buyLink: 'https://buy.stripe.com/7sIaHS1C59iYfwk9AD'
	},
	{
		id: 'hoodie-xl1',
		description: ['BECOMES STRONGER, WHEN WORN', 'Cyanotype on Cotton, 1/1', 'Gilden Heavyweight'],
		heading: images.shop.heading.hoodie,
		price: 90,
		size: 'XL',
		pageImages: [images.shop.clothes.hoodie_xl_front, images.shop.clothes.hoodie_xl_rear],
		shopImage: images.shop.clothes.hoodie_xl_front,
		buyLink: 'https://buy.stripe.com/4gwdU43Kddze97W7sw'
	},
	{
		id: 'jeans-xs',
		description: ['EXTRAORDINARYJEANS.EBU', 'Cyanotype, 1/1', 'UNIQLO JEANS'],
		heading: images.shop.heading.jeans,
		price: 'sold',
		// price: 80,
		size: 'XS - 28x26',
		pageImages: [images.shop.clothes.jeans_xs_front, images.shop.clothes.jeans_xs_rear],
		shopImage: images.shop.clothes.jeans_xs_front,
		buyLink: 'https://buy.stripe.com/00g03e0y10Ms3NC7sx'
	},
	{
		id: 'jeans-s',
		description: [
			'features; ben stone, sylvester stallone, UK Gurner neibors dog, Frida Kahlo & myslef',
			'Cyanotype, 1/1',
			'UNIQLO JEANS'
		],
		heading: images.shop.heading.jeans,
		price: 'sold',
		// price: 80,
		size: 'S - 28x28',
		pageImages: [images.shop.clothes.jeans_s_front, images.shop.clothes.jeans_s_rear],
		shopImage: images.shop.clothes.jeans_s_front,
		buyLink: 'https://buy.stripe.com/28o2bma8BeDi83S9AG'
	},
	{
		id: 'hoodie-xl2',
		description: ['SWIRLY CHAIN HOODIE', 'Cyanotype, 1/1', 'Gilden Heavyweight'],
		heading: images.shop.heading.hoodie,
		price: 90,
		size: 'XL',
		pageImages: [images.shop.clothes.hoodie_xl2_front, images.shop.clothes.hoodie_xl2_rear],
		shopImage: images.shop.clothes.hoodie_xl2_front,
		buyLink: 'https://buy.stripe.com/28obLWfsV9iYac09AH'
	},
	{
		id: 'jeans-xs2',
		description: ['HEART DETAIL BEHIND', 'Cyanotype, 1/1', 'UNIQLO JEANS'],
		heading: images.shop.heading.jeans,
		price: 'sold',
		// price: 80,
		size: 'XS - 24x25',
		pageImages: [images.shop.clothes.jeans_xs2_front, images.shop.clothes.jeans_xs2_rear],
		shopImage: images.shop.clothes.jeans_xs2_front,
		buyLink: 'https://buy.stripe.com/14k4jubcFbr697W289'
	},
	{
		id: 'sweater-m1',
		description: ['STAR ON BACK', 'Cyanotype, 1/1', 'GILDAN HEAVYWEIGHT'],
		heading: images.shop.heading.sweater,
		price: 60,
		size: 'M',
		pageImages: [images.shop.clothes.sweater_m_front, images.shop.clothes.sweater_m_rear],
		shopImage: images.shop.clothes.sweater_m_front,
		buyLink: 'https://buy.stripe.com/dR65ny1C58eUac0bII'
	},
	{
		id: 'polo-m1',
		description: [
			'REVERSE DEPENDING ON SITUATION',
			'Cyanotype on Cotton, 1/1',
			'Gilden Heavyweight'
		],
		heading: images.shop.heading.polo,
		price: 'sold',
		// price: 35,
		size: 'M',
		pageImages: [images.shop.clothes.polo_m1_inside, images.shop.clothes.polo_m1_outside],
		shopImage: images.shop.clothes.polo_m1_inside,
		buyLink: 'https://buy.stripe.com/4gwdU494x52Ick88wE'
	},
	{
		id: 'sweater-l',
		description: ['LOVE STORY', 'Cyanotype, 1/1', 'GILDAN HEAVYWEIGHT'],
		heading: images.shop.heading.sweater,
		price: 60,
		size: 'L',
		pageImages: [images.shop.clothes.sweater_l_front, images.shop.clothes.sweater_l_rear],
		shopImage: images.shop.clothes.sweater_l_front,
		buyLink: 'https://buy.stripe.com/4gw4judkN7aQ83S5kt'
	},
	{
		id: 'chinos-l',
		description: ['GUCCI??', 'Cyanotype, 1/1', 'GAP CHINO'],
		heading: images.shop.heading.trouser,
		price: 'sold',
		// price: 80,
		size: 'L - 34x32',
		pageImages: [images.shop.clothes.chinos_l_front, images.shop.clothes.chinos_l_rear],
		shopImage: images.shop.clothes.chinos_l_front,
		buyLink: 'https://buy.stripe.com/eVaeY8bcF2UA1FucMW'
	},
	{
		id: 'sweater-s',
		description: ['LEGENDARYSWEATERS.ORG', 'Cyanotype, 1/1', 'GILDAN HEAVYWEIGHT'],
		heading: images.shop.heading.sweater,
		price: 60,
		size: 'S',
		pageImages: [images.shop.clothes.sweater_s_front, images.shop.clothes.sweater_s_rear],
		shopImage: images.shop.clothes.sweater_s_front,
		buyLink: 'https://buy.stripe.com/bIY17idkN2UAac000b'
	},
	{
		id: 'jeans-m',
		description: ['STRAIGHT CHAIN', 'Cyanotype, 1/1', 'UNIQLO jeans'],
		heading: images.shop.heading.jeans,
		price: 80,
		size: 'M - 29x28',
		pageImages: [images.shop.clothes.jeans_m_front, images.shop.clothes.jeans_m_rear],
		shopImage: images.shop.clothes.jeans_m_front,
		buyLink: 'https://buy.stripe.com/bIY17idkN2UAac000b'
	},
	{
		id: 'sweater-s2',
		description: ['STAR STORY', 'Cyanotype, 1/1', 'GILDAN HEAVYWEIGHT'],
		heading: images.shop.heading.sweater,
		price: 60,
		size: 'S',
		pageImages: [images.shop.clothes.sweater_s2_front, images.shop.clothes.sweater_s2_rear],
		shopImage: images.shop.clothes.sweater_s2_front,
		buyLink: 'https://buy.stripe.com/4gw7vG6Wp7aQck88wJ'
	},
	{
		id: 'polo-xs',
		description: [';)', 'Cyanotype, 1/1', 'Gilden Heavyweight'],
		heading: images.shop.heading.polo,
		price: 35,
		size: 'XS',
		pageImages: [images.shop.clothes.polo_xs_inside, images.shop.clothes.polo_xs_outside],
		shopImage: images.shop.clothes.polo_xs_inside,
		buyLink: 'https://buy.stripe.com/00g2bma8B0Ms4RGfZc'
	},
	{
		id: 'jeans-l',
		description: ['GOOD OPPERTUNITY FOR TEAM PHOTO', 'Cyanotype, 1/1', 'UNIQLO JEANS'],
		heading: images.shop.heading.jeans,
		price: 80,
		size: 'L - 32x30',
		pageImages: [images.shop.clothes.jeans_l_front, images.shop.clothes.jeans_l_rear],
		shopImage: images.shop.clothes.jeans_l_front,
		buyLink: 'https://buy.stripe.com/00g5ny1C5eDifwk4gv'
	},

	{
		id: 'sweater-m2',
		description: ['<3', 'Cyanotype, 1/1', 'GILDAN HEAVYWEIGHT'],
		heading: images.shop.heading.sweater,
		price: 60,
		size: 'M',
		pageImages: [images.shop.clothes.sweater_m2_front, images.shop.clothes.sweater_m2_rear],
		shopImage: images.shop.clothes.sweater_m2_front,
		buyLink: 'https://buy.stripe.com/5kAbLWgwZ8eUgAo6oE'
	},
	{
		id: 'chinos-xl2',
		description: [
			'walk at a steady pace, swing arms freely and stand as straight as you can',
			'Cyanotype, 1/1',
			'TOMMY HILFIGER CHINO'
		],
		heading: images.shop.heading.trouser,
		price: 80,
		size: 'XL - 36x34',
		pageImages: [images.shop.clothes.chinos_xl2_front, images.shop.clothes.chinos_xl2_rear],
		shopImage: images.shop.clothes.chinos_xl2_front,
		buyLink: 'https://buy.stripe.com/9AQeY8cgJ66M2Jy6oF'
	},
	{
		id: 'polo-m2',
		description: ['PUT IT ON TO FIND OUT', 'Cyanotype on Cotton, 1/1', 'Gilden Heavyweight'],
		heading: images.shop.heading.polo,
		price: 35,
		size: 'M',
		pageImages: [images.shop.clothes.polo_m2_outside, images.shop.clothes.polo_m2_inside],
		shopImage: images.shop.clothes.polo_m2_outside,
		buyLink: 'https://buy.stripe.com/cN27vGa8BfHm6ZO28q'
	},
	{
		id: 'hoodie-l',
		description: ['all over circles', 'Cyanotype on Cotton, 1/1', 'Gilden Heavyweight'],
		heading: images.shop.heading.hoodie,
		price: 90,
		size: 'L',
		pageImages: [images.shop.clothes.hoodie_l_front, images.shop.clothes.hoodie_l_rear],
		shopImage: images.shop.clothes.hoodie_l_front,
		buyLink: 'https://buy.stripe.com/8wM6rC5Sl0Msck8cN5'
	},
	{
		id: 'chinos-l2',
		description: ['five star chain trouser', 'Cyanotype, 1/1', '100% COTTON CHINO'],
		heading: images.shop.heading.trouser,
		price: 80,
		size: 'L - 30x32',
		pageImages: [images.shop.clothes.chinos_l2_front, images.shop.clothes.chinos_l2_rear],
		shopImage: images.shop.clothes.chinos_l2_front,
		buyLink: 'https://buy.stripe.com/14k2bm5SlfHmfwk5kE'
	}
];
