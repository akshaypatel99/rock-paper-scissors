import React from 'react';
import { useGameData } from '../context/GameState';
import styles from './Header.module.css';

export default function Header() {
	const [state, dispatch] = useGameData();

	return (
		<header className={styles.header}>
			<img
				src={
					state.mode === 'classic'
						? '/images/logo.svg'
						: '/images/logo-bonus.svg'
				}
				alt='Rock Paper Scissors'
			/>

			<p className={styles.score}>
				Score <span>{state.score}</span>
			</p>
		</header>
	);
}
