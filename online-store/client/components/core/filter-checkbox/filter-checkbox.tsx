import React, { ButtonHTMLAttributes } from 'react'

import { Checkbox } from '@/shared/components/ui'

export interface FilterChecboxProps {
	text: string
	value: string
	endAdornment?: React.ReactNode
	onCheckedChange?: (checked: boolean) => void
	checked?: boolean
}

export const FilterCheckbox: React.FC<FilterChecboxProps> = ({
	text,
	value,
	endAdornment,
	onCheckedChange,
	checked
}) => {
	return (
		<div className='flex items-center space-x-2'>
			<Checkbox
				onCheckedChange={onCheckedChange}
				checked={checked}
				value={value}
				className='h-5 w-5 rounded-[8px]'
				id={`checkbox-${String(value)}`}
			/>
			<label
				htmlFor={`checkbox-${String(value)}`}
				className='flex-1 cursor-pointer leading-none'
			>
				{text}
			</label>
			{endAdornment}
		</div>
	)
}
