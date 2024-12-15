import { Menu } from 'lucide-react'

import { AdvertisingBanners } from '@/shared/sharedd/advertisingBanners'
import { Categories } from '@/shared/sharedd/categories'
import { Container } from '@/shared/sharedd/container'
import { Filters } from '@/shared/sharedd/filters'
import { Header } from '@/shared/sharedd/header'
import { PaginationDemo } from '@/shared/sharedd/pagination'

import { Fotter } from '@/components/core/Footer'
import { SortPopup } from '@/components/core/SortPopup/Sort-popup'
import { Catalog } from '@/components/core/catalog/catalog'
import { Catalog_ } from '@/components/core/catalog_'

export default function ExerciseEquipment() {
	return (
		<Container className='w-full'>
			<Header />
			<Catalog />
			<Catalog_ />
			<PaginationDemo />
			<Fotter />
		</Container>
	)
}
