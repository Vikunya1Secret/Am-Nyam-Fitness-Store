import { Container } from '@/shared/sharedd/container'
import { Header } from '@/shared/sharedd/header'

import styles from './Basket.module.css'
import { Fotter } from '@/components/core/Footer'
import { Catalog } from '@/components/core/catalog/catalog'
import { PopularProduct } from '@/components/core/popularProduct'

export default function Basket() {
	return (
		<Container className='w-full'>
			<Header />
			<Catalog />
			<div className={styles.page}>
				<div className={styles.basket}>
					<h1>В вашей избранном пусто</h1>
					<div>
						<img src='/like.png' alt='basket' />
					</div>
					<h2>
						Понравилась какая-то вещь? Добавьте её в избранное и
						вернитесь к ней позже в любой момент.
					</h2>
				</div>
				<PopularProduct />
			</div>
			<Fotter />
		</Container>
	)
}
