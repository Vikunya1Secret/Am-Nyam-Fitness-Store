import Link from 'next/link'

import { Container } from '@/shared/sharedd/container'
import { Header } from '@/shared/sharedd/header'

import styles from './404.module.css'
import { Fotter } from '@/components/core/Footer'
import { Catalog } from '@/components/core/catalog/catalog'

export default function NotFound() {
	return (
		<Container className='w-full'>
			<Header />
			<Catalog />
			<div className={styles.page}>
				<div>
					<img src='/work-in-progress.png' alt='basket' />
				</div>
				<h2>
					Кажется, вы попали не туда, но это легко исправить!
					<br /> Загляните в наш каталог за идеями или проверьте
					избранное — возможно, там уже ждёт что-то особенное.
				</h2>
			</div>
			<Fotter />
		</Container>
	)
}
