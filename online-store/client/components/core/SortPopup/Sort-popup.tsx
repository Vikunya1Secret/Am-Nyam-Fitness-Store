import { ArrowUpDown } from 'lucide-react'
import React from 'react'

import {
	Popover,
	PopoverContent,
	PopoverTrigger
} from '@/shared/components/ui/popover'

import styles from './SortPopup.module.css'
import { cn } from '@/lib/utils'

interface Props {
	className?: string
}

export const SortPopup: React.FC<Props> = ({ className }) => {
	return (
		<Popover>
			<PopoverTrigger asChild className={styles.popover}>
				<div
					className={cn(
						'rounded-1xl inline-flex cursor-pointer items-center gap-1 px-[27px]',
						className
					)}
				>
					<ArrowUpDown className='h-4 w-4' />

					<b className='text-primary'>По популярности</b>
				</div>
			</PopoverTrigger>
			<PopoverContent className={styles.popoverContent}>
				<ul>
					<li className='rounded-1xl cursor-pointer p-2 px-4 hover:bg-[#E9F1FF] hover:text-primary'>
						По популярности
					</li>
					<li className='rounded-1xl cursor-pointer p-2 px-4 hover:bg-[#E9F1FF] hover:text-primary'>
						Сначала недорогие
					</li>
					<li className='rounded-1xl cursor-pointer p-2 px-4 hover:bg-[#E9F1FF] hover:text-primary'>
						Сначала дорогие
					</li>
					<li className='rounded-1xl cursor-pointer p-2 px-4 hover:bg-[#E9F1FF] hover:text-primary'>
						С лучшей оценкой
					</li>
				</ul>
			</PopoverContent>
		</Popover>
	)
}
