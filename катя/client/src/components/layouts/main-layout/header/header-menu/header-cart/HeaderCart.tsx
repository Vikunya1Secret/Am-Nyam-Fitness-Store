import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/Button'
import { Heading } from '@/components/ui/Heading'
import {
	Sheet,
	SheetContent,
	SheetTitle,
	SheetTrigger
} from '@/components/ui/Sheet'

import { PUBLIC_URL } from '@/config/url.config'

import { useCart } from '@/hooks/useCart'
import { useProfile } from '@/hooks/useProfile'

import { formatPrice } from '@/utils/string/format-price'

import styles from './HeaderCart.module.scss'

export function HeaderCart() {
	return (
		<Sheet>
			<SheetTitle></SheetTitle>
			<SheetTrigger asChild>
				<Button variant='ghost'>Корзина</Button>
			</SheetTrigger>
			<SheetContent className={styles.cart}>
				<Heading title='Корзина товаров' className='text-xl' />
			</SheetContent>
		</Sheet>
	)
}
