import { IProduct } from './product.interface'

export interface ICartItem {
	id: number
	product: IProduct
	/* количество*/
	quantity: number
	price: number
}
