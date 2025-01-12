/* интерфейс для магазина*/
export interface IStore {
	id: string
	title: string
	description: string
}
/* интерфейс на создание 
IStoreCreate(нужен для формочек)
extends - расширятся
с помощью pick берём только title
берём название IStore*/
export interface IStoreCreate extends Pick<IStore, 'title'> {}
/* интерфейс на изменение*/
/* с помощью Omit исключаем id*/
export interface IStoreEdit extends Omit<IStore, 'id'> {}
