'use client'

import { Search } from 'lucide-react'
import React from 'react'

import styles from './search-input.module.css'

export const SearchInput = () => {
	return (
		<>
			<div className={styles.search}>
				<Search className={styles.search_Search} />
				<input className='bg-[#B7CDF3] outline-none' type='text' />
			</div>
		</>
	)
}
