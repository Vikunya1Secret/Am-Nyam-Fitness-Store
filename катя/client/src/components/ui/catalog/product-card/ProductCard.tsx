import Image from 'next/image'
import Link from 'next/link'

import { PUBLIC_URL } from '@/config/url.config'

import { IProduct } from '@/shared/types/product.interface'

import { formatPrice } from '@/utils/string/format-price'

import styles from './ProductCard.module.scss'

interface ProductCardProps {
	product: IProduct
}

export function ProductCard({ product }: ProductCardProps) {
	return <div>{product.title}</div>
}
