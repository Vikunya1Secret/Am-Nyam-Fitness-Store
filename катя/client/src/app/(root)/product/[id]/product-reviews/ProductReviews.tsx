import { Plus, Trash } from 'lucide-react'
import Image from 'next/image'
import { Rating } from 'react-simple-star-rating'

import { Button } from '@/components/ui/Button'
import { ConfirmModal } from '@/components/ui/modals/ConfirmModal'
import { ReviewModal } from '@/components/ui/modals/ReviewModal'

import { useDeleteReview } from '@/hooks/queries/reviews/useDeleteReview'
import { useProfile } from '@/hooks/useProfile'

import { IProduct } from '@/shared/types/product.interface'

import styles from './ProductReviews.module.scss'

interface ProductReviewsProps {
	product: IProduct
}

export function ProductReviews({ product }: ProductReviewsProps) {
	return <div>ProductReviews</div>
}
