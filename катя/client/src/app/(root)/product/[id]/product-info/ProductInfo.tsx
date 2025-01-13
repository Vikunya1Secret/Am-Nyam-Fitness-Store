import Link from 'next/link'

import { PUBLIC_URL } from '@/config/url.config'

import { IProduct } from '@/shared/types/product.interface'

import { formatPrice } from '@/utils/string/format-price'
import { getReviewWordWithEnding } from '@/utils/string/get-review-word-with-ending'

import styles from './ProductInfo.module.scss'

interface ProductInfoProps {
	product: IProduct
}

export function ProductInfo({ product }: ProductInfoProps) {
	return <div>ProductInfo</div>
}
