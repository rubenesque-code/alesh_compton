import { images } from '^assets/images';
import type { ImgMeta } from '^types';

export type Cloth = {
	id: string;
	description: string[];
	heading: ImgMeta;
	price: number;
	size: 'XS' | 'S' | 'M' | 'L' | 'XL';
	pageImages: ImgMeta[];
	shopImage: ImgMeta;
};

export const cloths: Cloth[] = [
	{
		id: 'polo-m1',
		description: [
			'REVERSE TO BREAK FREE OF CHAIN',
			'Cyanotype on Cotton, 1/1',
			'Gilden Heavyweight'
		],
		heading: images.shop.heading.polo,
		price: 45,
		size: 'M',
		pageImages: [images.shop.clothes.polo_m3_outside, images.shop.clothes.polo_m3_inside],
		shopImage: images.shop.clothes.polo_m3_outside
	},
	{
		id: 'chinos-xl1',
		description: ['CAN BE USED IN THE OFFICE/CLUB', 'Cyanotype, 1/1', 'DOCKERS CHINO'],
		heading: images.shop.heading.trouser,
		price: 90,
		size: 'XL',
		pageImages: [images.shop.clothes.chinos_xl1_front, images.shop.clothes.chinos_xl1_rear],
		shopImage: images.shop.clothes.chinos_xl1_front
	},
	{
		id: 'hoodie-xl1',
		description: ['BECOMES STRONGER, WHEN WORN', 'Cyanotype on Cotton, 1/1', 'Gilden Heavyweight'],
		heading: images.shop.heading.hoodie,
		price: 120,
		size: 'XL',
		pageImages: [images.shop.clothes.hoodie_xl_front, images.shop.clothes.hoodie_xl_rear],
		shopImage: images.shop.clothes.hoodie_xl_front
	},
	{
		id: 'jeans-xs',
		description: ['EXTRAORDINARYJEANS.EBU', 'Cyanotype, 1/1', 'UNIQLO JEANS'],
		heading: images.shop.heading.jeans,
		price: 90,
		size: 'XS',
		pageImages: [images.shop.clothes.jeans_xs_front, images.shop.clothes.jeans_xs_rear],
		shopImage: images.shop.clothes.jeans_xs_front
	},
	{
		id: 'jeans-s',
		description: [
			'features; ben stone, sylvester stallone, UK Gurner neibors dog, Frida Kahlo & myslef',
			'Cyanotype, 1/1',
			'UNIQLO JEANS'
		],
		heading: images.shop.heading.jeans,
		price: 90,
		size: 'S',
		pageImages: [images.shop.clothes.jeans_s_front, images.shop.clothes.jeans_s_rear],
		shopImage: images.shop.clothes.jeans_s_front
	},
	{
		id: 'hoodie-xl2',
		description: ['SWIRLY CHAIN HOODIE', 'Cyanotype, 1/1', 'Gilden Heavyweight'],
		heading: images.shop.heading.hoodie,
		price: 120,
		size: 'XL',
		pageImages: [images.shop.clothes.hoodie_xl2_front, images.shop.clothes.hoodie_xl2_rear],
		shopImage: images.shop.clothes.hoodie_xl2_front
	},
	{
		id: 'jeans-xs2',
		description: ['HEART DETAIL BEHIND', 'Cyanotype, 1/1', 'UNIQLO JEANS'],
		heading: images.shop.heading.jeans,
		price: 90,
		size: 'XS',
		pageImages: [images.shop.clothes.jeans_xs2_front, images.shop.clothes.jeans_xs2_rear],
		shopImage: images.shop.clothes.jeans_xs2_front
	},
	{
		id: 'sweater-m1',
		description: ['STAR ON BACK', 'Cyanotype, 1/1', 'GILDAN HEAVYWEIGHT'],
		heading: images.shop.heading.sweater,
		price: 70,
		size: 'M',
		pageImages: [images.shop.clothes.sweater_m_front, images.shop.clothes.sweater_m_rear],
		shopImage: images.shop.clothes.sweater_m_front
	},
	{
		id: 'polo-m1',
		description: [
			'REVERSE DEPENDING ON SITUATION',
			'Cyanotype on Cotton, 1/1',
			'Gilden Heavyweight'
		],
		heading: images.shop.heading.sweater,
		price: 45,
		size: 'M',
		pageImages: [images.shop.clothes.polo_m1_inside, images.shop.clothes.polo_m1_outside],
		shopImage: images.shop.clothes.polo_m1_inside
	},
	{
		id: 'sweater-l',
		description: ['LOVE STORY', 'Cyanotype, 1/1', 'GILDAN HEAVYWEIGHT'],
		heading: images.shop.heading.sweater,
		price: 70,
		size: 'L',
		pageImages: [images.shop.clothes.sweater_l_front, images.shop.clothes.sweater_l_rear],
		shopImage: images.shop.clothes.sweater_l_front
	},
	{
		id: 'chinos-l',
		description: ['GUCCI??', 'Cyanotype, 1/1', 'GAP CHINO'],
		heading: images.shop.heading.trouser,
		price: 90,
		size: 'L',
		pageImages: [images.shop.clothes.chinos_l_front, images.shop.clothes.chinos_l_rear],
		shopImage: images.shop.clothes.chinos_l_front
	},
	{
		id: 'sweater-s',
		description: ['LEGENDARYSWEATERS.ORG', 'Cyanotype, 1/1', 'GILDAN HEAVYWEIGHT'],
		heading: images.shop.heading.sweater,
		price: 70,
		size: 'S',
		pageImages: [images.shop.clothes.sweater_s_front, images.shop.clothes.sweater_s_rear],
		shopImage: images.shop.clothes.sweater_s_front
	},
	{
		id: 'jeans-m',
		description: ['STRAIGHT CHAIN', 'Cyanotype, 1/1', 'UNIQLO jeans'],
		heading: images.shop.heading.jeans,
		price: 90,
		size: 'M',
		pageImages: [images.shop.clothes.jeans_m_front, images.shop.clothes.jeans_m_rear],
		shopImage: images.shop.clothes.jeans_m_front
	},
	{
		id: 'sweater-s2',
		description: ['STAR STORY', 'Cyanotype, 1/1', 'GILDAN HEAVYWEIGHT'],
		heading: images.shop.heading.sweater,
		price: 70,
		size: 'S',
		pageImages: [images.shop.clothes.sweater_s2_front, images.shop.clothes.sweater_s2_rear],
		shopImage: images.shop.clothes.sweater_s2_front
	},
	{
		id: 'polo-xs',
		description: [';)', 'Cyanotype, 1/1', 'Gilden Heavyweight'],
		heading: images.shop.heading.polo,
		price: 45,
		size: 'XS',
		pageImages: [images.shop.clothes.polo_xs_inside, images.shop.clothes.polo_xs_outside],
		shopImage: images.shop.clothes.polo_xs_inside
	},
	{
		id: 'jeans-l',
		description: ['GOOD OPPERTUNITY FOR TEAM PHOTO', 'Cyanotype, 1/1', 'UNIQLO JEANS'],
		heading: images.shop.heading.jeans,
		price: 90,
		size: 'L',
		pageImages: [images.shop.clothes.jeans_l_front, images.shop.clothes.jeans_l_rear],
		shopImage: images.shop.clothes.jeans_l_front
	},

	{
		id: 'sweater-m2',
		description: ['<3', 'Cyanotype, 1/1', 'GILDAN HEAVYWEIGHT'],
		heading: images.shop.heading.sweater,
		price: 70,
		size: 'M',
		pageImages: [images.shop.clothes.sweater_m2_front, images.shop.clothes.sweater_m2_rear],
		shopImage: images.shop.clothes.sweater_m2_front
	},
	{
		id: 'chinos-xl2',
		description: [
			'walk at a steady pace, swing arms freely and stand as straight as you can',
			'Cyanotype, 1/1',
			'TOMMY HILFIGER CHINO'
		],
		heading: images.shop.heading.trouser,
		price: 90,
		size: 'XL',
		pageImages: [images.shop.clothes.chinos_xl2_front, images.shop.clothes.chinos_xl2_rear],
		shopImage: images.shop.clothes.chinos_xl2_front
	},
	{
		id: 'polo-m2',
		description: ['PUT IT ON TO FIND OUT', 'Cyanotype on Cotton, 1/1', 'Gilden Heavyweight'],
		heading: images.shop.heading.polo,
		price: 45,
		size: 'M',
		pageImages: [images.shop.clothes.polo_m2_outside, images.shop.clothes.polo_m2_inside],
		shopImage: images.shop.clothes.polo_m2_outside
	},
	{
		id: 'hoodie-l',
		description: ['all over circles', 'Cyanotype on Cotton, 1/1', 'Gilden Heavyweight'],
		heading: images.shop.heading.hoodie,
		price: 120,
		size: 'L',
		pageImages: [images.shop.clothes.hoodie_l_front, images.shop.clothes.hoodie_l_rear],
		shopImage: images.shop.clothes.hoodie_l_front
	},
	{
		id: 'chinos-l2',
		description: ['five star chain trouser', 'Cyanotype, 1/1', '100% COTTON CHINO'],
		heading: images.shop.heading.trouser,
		price: 90,
		size: 'L',
		pageImages: [images.shop.clothes.chinos_l2_front, images.shop.clothes.chinos_l2_rear],
		shopImage: images.shop.clothes.chinos_l2_front
	}
];
