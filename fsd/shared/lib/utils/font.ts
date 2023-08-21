import localFont from 'next/font/local';

const Graphik = localFont({
	src: [
		{
			path: '../../../../public/font/Graphik/Graphik-Regular-Web.woff2',
			weight: '400',
			style: 'normal',
		},
	],
});

export { Graphik };
