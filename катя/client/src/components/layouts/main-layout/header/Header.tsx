import styles from './Header.module.scss'
import { Logo } from './logo/Logo'

export function Header() {
	return (
		<div className={styles.header}>
			<Logo />
		</div>
	)
}
