export const APP_URL = process.env.APP_URL as string

export const PUBLIC_URL = {
	root: (url = '') => `${url ? url : ''}`,

	home: () => PUBLIC_URL.root('/'),
	auth: () => PUBLIC_URL.root('/auth'),
	explorer: (query = '') => PUBLIC_URL.root(`/explorer${query}`),

	product: (id = '') => PUBLIC_URL.root(`/product/${id}`),
	category: (id = '') => PUBLIC_URL.root(`/category/${id}`)
}

export const DASHBOARD_URL = {
	root: (url = '') => `/dashboard${url ? url : ''}`,

	home: () => DASHBOARD_URL.root('/'),
	favorites: () => DASHBOARD_URL.root('/favorites')
}

export const STORE_URL = {
	root: (url = '') => `/store${url ? url : ''}`,

	home: (storeId = '') => STORE_URL.root(`/${storeId}`),

	products: (storeId = '') => STORE_URL.root(`/${storeId}/products`),
	productCreate: (storeId = '') =>
		STORE_URL.root(`/${storeId}/products/create`),
	productEdit: (storeId = '', id = '') =>
		STORE_URL.root(`/${storeId}/products/${id}`),

	categories: (storeId = '') => STORE_URL.root(`/${storeId}/categories`),
	categoryCreate: (storeId = '') =>
		STORE_URL.root(`/${storeId}/categories/create`),
	categoryEdit: (storeId = '', id = '') =>
		STORE_URL.root(`/${storeId}/categories/${id}`),

	colors: (storeId = '') => STORE_URL.root(`/${storeId}/colors`),
	colorCreate: (storeId = '') => STORE_URL.root(`/${storeId}/colors/create`),
	colorEdit: (storeId = '', id = '') =>
		STORE_URL.root(`/${storeId}/colors/${id}`),

	reviews: (storeId = '') => STORE_URL.root(`/${storeId}/reviews`),

	settings: (storeId = '') => STORE_URL.root(`/${storeId}/settings`)
}

/* url конкретно сайта 

/* url приложения нашего сайта нашего фронта 
export const APP_URL = process.env.APP_URL as string
/* доступны всем (будет в мидвер проверять)
export const PUBLIC_URL = {
	root: (url = '') => `${url ? url : ''}`,
	/* главная страничка*/
	/* ничего в себя не принимает, отдаёт PUBLIC_URL...
	home: () => PUBLIC_URL.root('/'),
	auth: () => PUBLIC_URL.root('/auth'),
	// страничка с нашими товарами(с каталогом всех товаров)
	explorer: (query = '') => PUBLIC_URL.root(`/explorer${query}`),
	/* страничка с продуктом
	product: (id = '') => PUBLIC_URL.root(`/product/${id}`),
	/* страничка с категориями
	category: (id = '') => PUBLIC_URL.root(`/category/${id}`)
}
/* url для пользователя
export const DASHBOARD_URL = {
	root: (url = '') => `/dashboard${url ? url : ''}`,

	home: () => DASHBOARD_URL.root('/'),
	/*выводятся заказы, а можно настройки профиля пользователя
	favorites: () => DASHBOARD_URL.root('/favorites')
}
/* url для работы с магазином
export const STORE_URL = {
	root: (url = '') => `/store${url ? url : ''}`,

	home: (storeId = '') => STORE_URL.root(`/${storeId}`),

	products: (storeId = '') => STORE_URL.root(`/${storeId}/products`),
	productCreate: (storeId = '') =>
		STORE_URL.root(`/${storeId}/products/create`),
	productEdit: (storeId = '', id = '') =>
		STORE_URL.root(`/${storeId}/products/${id}`),

	categories: (storeId = '') => STORE_URL.root(`/${storeId}/categories`),
	categoryCreate: (storeId = '') =>
		STORE_URL.root(`/${storeId}/categories/create`),
	categoryEdit: (storeId = '', id = '') =>
		STORE_URL.root(`/${storeId}/categories/${id}`),

	colors: (storeId = '') => STORE_URL.root(`/${storeId}/colors`),
	colorCreate: (storeId = '') => STORE_URL.root(`/${storeId}/colors/create`),
	colorEdit: (storeId = '', id = '') =>
		STORE_URL.root(`/${storeId}/colors/${id}`),
	/* отзывы тоже самое только нет создания и редактирования 
	reviews: (storeId = '') => STORE_URL.root(`/${storeId}/reviews`),
	/*  страничка с настройками магазина
	settings: (storeId = '') => STORE_URL.root(`/${storeId}/settings`)
}
*/