'use client'

/* описаны провайдеры, подключены все библиотеки, которые нужно обернуть в приложение*/
/* библиотека для запросов */
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { type PropsWithChildren, useState } from 'react'
import { Toaster } from 'react-hot-toast'

export function Providers({ children }: PropsWithChildren) {
	/* эта настроцка нужна чтобы при изменении фокуса окна не происходил(отправился) лишний запрос*/
	const [client] = useState(
		new QueryClient({
			defaultOptions: {
				queries: {
					refetchOnWindowFocus: false
				}
			}
		})
	)

	return (
		<QueryClientProvider client={client}>
			<Toaster />
			{children}
		</QueryClientProvider>
	)
}
