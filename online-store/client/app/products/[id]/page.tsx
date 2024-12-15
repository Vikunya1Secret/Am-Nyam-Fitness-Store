import Catalog from '@/shared/sharedd/catalog'
import { Container } from '@/shared/sharedd/container'
import { Header } from '@/shared/sharedd/header'

import { Fotter } from '@/components/core/Footer'

export default function ProductPage() {
	return (
		<Container className='w-full'>
			<Header />
			<Catalog />
			<div>
				<h1>Product Page</h1>
			</div>
			<Fotter />
		</Container>
	)
}
