import React from 'react'

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '../components/ui/advertisingBanners'

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
/*<Carousel className="ml-[125px] w-full max-w-xs">
      <CarouselContent>
        <Image src="/Logo.jpg" alt="logo" width={271} height={69} />
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>*/
