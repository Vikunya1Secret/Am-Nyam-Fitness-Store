import { IUser } from './user.interface'
/* для отзывов*/
export interface IReview {
	id: string
	createdAt: string
	/* текст отзыва */
	text: string
	rating: number
	user: IUser
}

export interface IReviewInput extends Pick<IReview, 'rating' | 'text'> {}
