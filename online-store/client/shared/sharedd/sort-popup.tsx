import { ArrowUpDown } from 'lucide-react'
import React from 'react'

import { cn } from '../utils/clsx'

export interface Props {
	className?: 'string'
}

export const SortPopups: React.FC<Props> = ({ className }) => {
	return (
		<div
			className={cn(
				'item-center inline-flex h-[52px] cursor-pointer gap-1 rounded-2xl bg-gray-50 px-5',
				className
			)}
		>
			<ArrowUpDown size={16} />
			<b className='text-primary'>популярное</b>
		</div>
	)
}
