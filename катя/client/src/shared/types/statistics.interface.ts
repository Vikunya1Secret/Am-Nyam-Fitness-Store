export interface IMainStatistics {
	id: number
	name: string
	value: number
}

export interface IMonthlySales {
	date: string
	value: number
}
/* последние 5 пользоватлей которые оплатили в магазине */
export interface ILastUsers {
	id: string
	name: string
	email: string
	picture: string
	total: number
}

export interface IMiddleStatistics {
	monthlySales: IMonthlySales[]
	lastUsers: ILastUsers[]
}
