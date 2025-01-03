'use client'

import { Slot } from '@radix-ui/react-slot'
import { type VariantProps, cva } from 'class-variance-authority'
import { Loader } from 'lucide-react'
import * as React from 'react'

import { cn } from '@/shared/utils/clsx'

const buttonVariants = cva(
	'inline-flex items-center justify-center whitespace-nowrap rounded-md active:translate-y-[1px] text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:bg-gray-500',
	{
		variants: {
			variant: {
				default:
					'bg-primary text-primary-foreground hover:bg-[#7C8DA7]',
				destructive:
					'bg-destructive text-destructive-foreground hover:bg-destructive/0',
				outline:
					'border border-primary text-primary bg-transparent hover:bg-secondary',
				secondary: 'bg-secondary text-primary hover:bg-secondary/100',
				ghost: 'hover:bg-secondary hover:text-secondary-foreground',
				link: 'text-primary underline-offset-4 hover:underline'
			},
			size: {
				default: 'h-10z px-4 py-2',
				sm: 'h-9 rounded-md px-3',
				lg: 'h-11 rounded-md px-8',
				icon: 'h-10 w-10'
			}
		},
		defaultVariants: {
			variant: 'default',
			size: 'default'
		}
	}
)

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean
	loading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			className,
			variant,
			size,
			asChild = false,
			children,
			disabled,
			loading,
			...props
		},
		ref
	) => {
		const Comp = asChild ? Slot : 'button'
		return (
			<Comp
				disabled={disabled || loading}
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			>
				{!loading ? (
					children
				) : (
					<Loader className='h-5 w-5 animate-spin' />
				)}
			</Comp>
		)
	}
)
Button.displayName = 'Button'

export { Button, buttonVariants }
