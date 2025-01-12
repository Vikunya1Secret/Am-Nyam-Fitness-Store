import { IOrder } from './order.interface'
import { IProduct } from './product.interface'
import { IStore } from './store.interface'
/* favorites - товары которые пользователь добавил в избранное
   orders - заказы пользователя*/
export interface IUser {
	id: string
	name: string
	email: string
	picture: string
	/* избранные товары */
	favorites: IProduct[]
	/* заказы пользователя*/
	orders: IOrder[]
	stores: IStore[]
}
