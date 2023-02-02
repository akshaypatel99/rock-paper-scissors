import React from 'react';
import { useGameData } from '../context/GameState';
import styles from './Header.module.css';

export default function Header() {
	const [state, dispatch] = useGameData();

	return (
		<header className={styles.header}>
			<img src='/images/logo.svg' alt='Rock Paper Scissors' />

			<p className={styles.score}>
				Score <span>{state.score}</span>
			</p>
		</header>
	);
}
