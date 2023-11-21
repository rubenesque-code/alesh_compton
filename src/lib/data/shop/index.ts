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
		id: 'polo m1',
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
		id: 'chinos xl1',
		description: ['CAN BE USED IN THE OFFICE/CLUB', 'Cyanotype, 1/1', 'DOCKERS CHINO'],
		heading: images.shop.heading.trouser,
		price: 90,
		size: 'XL',
		pageImages: [images.shop.clothes.chinos_xl1_front, images.shop.clothes.chinos_xl1_rear],
		shopImage: images.shop.clothes.chinos_xl1_front
	},
	{
		id: 'hoodie xl1',
		description: ['BECOMES STRONGER, WHEN WORN', 'Cyanotype on Cotton, 1/1', 'Gilden Heavyweight'],
		heading: images.shop.heading.hoodie,
		price: 120,
		size: 'XL',
		pageImages: [images.shop.clothes.hoodie_xl_front, images.shop.clothes.hoodie_xl_rear],
		shopImage: images.shop.clothes.hoodie_xl_front
	},
	{
		id: 'jeans xs',
		description: ['EXTRAORDINARYJEANS.EBU', 'Cyanotype, 1/1', 'UNIQLO JEANS'],
		heading: images.shop.heading.jeans,
		price: 90,
		size: 'XS',
		pageImages: [images.shop.clothes.jeans_xs_front, images.shop.clothes.jeans_xs_rear],
		shopImage: images.shop.clothes.jeans_xs_front
	},
	{
		id: 'jeans xs DEV',
		description: ['EXTRAORDINARYJEANS.EBU', 'Cyanotype, 1/1', 'UNIQLO JEANS'],
		heading: images.shop.heading.jeans,
		price: 90,
		size: 'XS',
		pageImages: [images.shop.clothes.jeans_xs_front, images.shop.clothes.jeans_xs_rear],
		shopImage: images.shop.clothes.jeans_xs_front
	}
];
