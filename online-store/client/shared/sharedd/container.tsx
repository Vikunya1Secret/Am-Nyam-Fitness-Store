import React from 'react'

import { cn } from '../utils/clsx'

interface Props {
	className?: string
}

export const Container: React.FC<React.PropsWithChildren<Props>> = ({
	className,
	children
}) => {
	return (
		<div className={cn('mx-auto my-auto max-w-[100%]', className)}>
			{children}
		</div>
	)
}
