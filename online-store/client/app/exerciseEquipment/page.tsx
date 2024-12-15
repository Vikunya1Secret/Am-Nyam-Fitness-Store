import { Menu } from 'lucide-react'

import { Categories } from '@/shared/sharedd/categories'
import { Container } from '@/shared/sharedd/container'
import { Header } from '@/shared/sharedd/header'
import { PaginationDemo } from '@/shared/sharedd/pagination'

import { Fotter } from '@/components/core/Footer'
import { SortPopup } from '@/components/core/SortPopup/Sort-popup'
import { AdvertisingBanners } from '@/components/core/advertisingBanners/advertisingBanners'
import { Catalog } from '@/components/core/catalog/catalog'
import { Catalog_ } from '@/components/core/catalog_'
import { Filters } from '@/components/core/filter-checkbox/filters'

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
