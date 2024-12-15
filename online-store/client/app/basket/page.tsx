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
					<h1>В вашей корзине пусто</h1>
					<div>
						<img src='/basket.png' alt='basket' />
					</div>
					<h2>
						Чтобы облегчить покупку войдите в личный кабинет. <br />
						Вдруг у вас есть крутой список избранных товаров или
						что-то завалялось в корзине. А за новинками — в каталог.
					</h2>
				</div>
				<PopularProduct />
			</div>
			<Fotter />
		</Container>
	)
}
