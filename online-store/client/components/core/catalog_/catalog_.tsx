import { Button } from '@/shared/components/ui/button'

import { SortPopup } from '../SortPopup/Sort-popup'

import { BreadcrumbWithCustomSeparator } from './breadcrumb'
import styles from './catalog_.module.css'
import { Filters } from '@/components/core/filter-checkbox/filters'

interface Props {
	className?: string
}

export const Catalog_: React.FC<Props> = () => {
	return (
		<div className={styles.catalog}>
			<BreadcrumbWithCustomSeparator />
			<SortPopup className='mb-[50px] mt-[50px]' />
			<div className={styles.filterAndProduct}>
				<Filters />
				<div className={styles.product}>
					<div className={styles.item}>
						<Button className={styles.heart}>
							<img src='like_product.png' />
						</Button>
						<img
							src='/product4.png'
							alt='product4'
							width='290px'
							height='302px'
						/>
						<div>
							<h3>
								Кроссовки мужские Nike Revolution 6 Next Natureг
							</h3>
							<h2>22 999 ₽</h2>
							<Button>ДОБАВИТЬ В КОРЗИНУ</Button>
						</div>
					</div>

					<div className={styles.item}>
						<img
							src='/product4.png'
							alt='product4'
							width='290px'
							height='302px'
						/>
						<div>
							<h3>
								Кроссовки мужские Nike Revolution 6 Next Natureг
							</h3>
							<h2>22 999 ₽</h2>
							<Button>ДОБАВИТЬ В КОРЗИНУ</Button>
						</div>
					</div>

					<div className={styles.item}>
						<img
							src='/product4.png'
							alt='product4'
							width='290px'
							height='302px'
						/>
						<div>
							<h3>
								Кроссовки мужские Nike Revolution 6 Next Natureг
							</h3>
							<h2>22 999 ₽</h2>
							<Button>ДОБАВИТЬ В КОРЗИНУ</Button>
						</div>
					</div>

					<div className={styles.item}>
						<img
							src='/product4.png'
							alt='product4'
							width='290px'
							height='302px'
						/>
						<div>
							<h3>
								Кроссовки мужские Nike Revolution 6 Next Natureг
							</h3>
							<h2>22 999 ₽</h2>
							<Button>ДОБАВИТЬ В КОРЗИНУ</Button>
						</div>
					</div>

					<div className={styles.item}>
						<img
							src='/product4.png'
							alt='product4'
							width='290px'
							height='302px'
						/>
						<div>
							<h3>
								Кроссовки мужские Nike Revolution 6 Next Natureг
							</h3>
							<h2>22 999 ₽</h2>
							<Button>ДОБАВИТЬ В КОРЗИНУ</Button>
						</div>
					</div>
					<div className={styles.item}>
						<img
							src='/product4.png'
							alt='product4'
							width='290px'
							height='302px'
						/>
						<div>
							<h3>
								Кроссовки мужские Nike Revolution 6 Next Natureг
							</h3>
							<h2>22 999 ₽</h2>
							<Button>ДОБАВИТЬ В КОРЗИНУ</Button>
						</div>
					</div>
					<div className={styles.item}>
						<img
							src='/product4.png'
							alt='product4'
							width='290px'
							height='302px'
						/>
						<div>
							<h3>
								Кроссовки мужские Nike Revolution 6 Next Natureг
							</h3>
							<h2>22 999 ₽</h2>
							<Button>ДОБАВИТЬ В КОРЗИНУ</Button>
						</div>
					</div>

					<div className={styles.item}>
						<img
							src='/product4.png'
							alt='product4'
							width='290px'
							height='302px'
						/>
						<div>
							<h3>
								Кроссовки мужские Nike Revolution 6 Next Natureг
							</h3>
							<h2>22 999 ₽</h2>
							<Button>ДОБАВИТЬ В КОРЗИНУ</Button>
						</div>
					</div>

					<div className={styles.item}>
						<img
							src='/product4.png'
							alt='product4'
							width='290px'
							height='302px'
						/>
						<div>
							<h3>
								Кроссовки мужские Nike Revolution 6 Next Natureг
							</h3>
							<h2>22 999 ₽</h2>
							<Button>ДОБАВИТЬ В КОРЗИНУ</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
