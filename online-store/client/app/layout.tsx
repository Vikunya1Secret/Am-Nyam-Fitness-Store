import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Geologica } from 'next/font/google'

import { MainProvider } from '@/shared/providers'

import './globals.css'

const inter = Inter({
	subsets: ['cyrillic'],
	variable: '--font-geist-sans',
	weight: ['400', '500', '600', '700', '800', '900']
})
const geologica = Geologica({
	subsets: ['cyrillic'],
	variable: '--font-geist-mono',
	weight: ['400', '500', '600', '700', '800', '900']
})

// ceo
// установка заголовка и  описание нашего проекта
// description для поисковых систем, чтобы они могли читать что у меня за сайт, о чём он

export const metadata: Metadata = {
	title: {
		absolute: 'FitZone',
		template: '%s | FitZone'
	},
	description: 'Магазин спортивной одежды FitZone'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={geologica.className}>
				<main className='man-h-screen'>{children}</main>
			</body>
		</html>
	)
}
/*
<main className='man-h-screen'>{children}</main>
<MainProvider>{children}</MainProvider>
*/
