export interface IColor {
	id: string
	createdAt: string
	name: string
	value: string
	storeId: string
}
/* интерфейс для создания и изменения расширяемся с помощью Pick от интерфейса IColor*/
export interface IColorInput extends Pick<IColor, 'name' | 'value'> {}
