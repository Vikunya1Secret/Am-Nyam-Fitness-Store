import { Heart, ShoppingBag, ShoppingCart, UserRound } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

import { Container } from './container'
import { SearchInput } from './search-input'
import { cn } from '@/lib/utils'

interface Props {
	className?: string
}

export const Header: React.FC<Props> = ({ className }) => {
	return (
		<header className={cn('', className)}>
			<Container className='mx-auto my-auto flex max-w-[1200px] items-center justify-between py-8'>
				{/* Левая часть */}
				<form action='/'>
					<button>
						<img
							src='/Logo.jpg'
							alt='logo'
							width={271}
							height={69}
						/>
					</button>
				</form>

				{/* Середина */}
				<div className=''>
					<SearchInput />
				</div>

				{/* Правая часть */}
				<div className='flex items-center'>
					<form action='like' className='flex items-center px-2'>
						<button>
							<Heart size='39' />
						</button>
					</form>
					<form action='account' className='flex items-center px-4'>
						<button>
							<UserRound size='39' />
						</button>
					</form>
					<form action='basket' className='flex items-center'>
						<button>
							<ShoppingBag size='39' />
						</button>
					</form>
				</div>
			</Container>
		</header>
	)
}
