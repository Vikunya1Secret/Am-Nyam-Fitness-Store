import Link from 'next/link'

import { buttonVariants } from '@/shared/components/ui/button22'
import { Container } from '@/shared/sharedd/container'
import { Header } from '@/shared/sharedd/header'
import { PaginationDemo } from '@/shared/sharedd/pagination'

import { Fotter } from '@/components/core/Footer'
import { AdvertisingBanners } from '@/components/core/advertisingBanners/advertisingBanners'
import { Catalog } from '@/components/core/catalog/catalog'

/* 1 час 10 минут*/
import { Filters } from '@/components/core/filter-checkbox/filters'
import { PopularProduct } from '@/components/core/popularProduct'
import { WinterCollection } from '@/components/core/winterCollection'

export default function Home() {
	return (
		<Container className='w-full'>
			<Header />
			<Catalog />
			<AdvertisingBanners />
			<Link href='/auth/login' className={buttonVariants()}>
				Войти в аккаунт
			</Link>
			<PopularProduct />
			<WinterCollection />
			<Fotter />
		</Container>
	)
}
