import { AdvertisingBanners } from '@/shared/sharedd/advertisingBanners'
import { Container } from '@/shared/sharedd/container'

/* 1 час 10 минут*/
import { Filters } from '@/shared/sharedd/filters'
import { Header } from '@/shared/sharedd/header'
import { PaginationDemo } from '@/shared/sharedd/pagination'

import { Fotter } from '@/components/core/Footer'
import { Catalog } from '@/components/core/catalog/catalog'
import { PopularProduct } from '@/components/core/popularProduct'
import { WinterCollection } from '@/components/core/winterCollection'

export default function Home() {
	return (
		<Container className='w-full'>
			<Header />
			<Catalog />
			<AdvertisingBanners />
			<PopularProduct />
			<WinterCollection />
			<Fotter />
		</Container>
	)
}
