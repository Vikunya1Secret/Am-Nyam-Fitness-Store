import React from 'react'

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from './carusel'

interface Props {
	className?: string
}

export const AdvertisingBanners: React.FC<Props> = ({ className }) => {
	return (
		<div className='bg-[#0E0909]'>
			<Carousel className='mx-auto my-auto max-w-[1440px] pb-[50px] pt-[50px]'>
				<CarouselContent className='mx-auto my-auto flex items-center'>
					<CarouselItem>
						<img src='/image.png' alt='logo3' />
					</CarouselItem>
					<CarouselItem>
						<img src='/image1.png' alt='logo' />
					</CarouselItem>
					<CarouselItem>
						<img src='/image2.png' alt='logo2' />
					</CarouselItem>
					<CarouselItem>
						<img src='/image3.png' alt='logo3' />
					</CarouselItem>
					<CarouselItem>
						<img src='/image4.png' alt='logo3' />
					</CarouselItem>
					<CarouselItem>
						<img src='/image5.png' alt='logo3' />
					</CarouselItem>
				</CarouselContent>

				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	)
}
