import React from 'react';
import { useGameData } from '../context/GameState';
import UserChoice from './UserChoice';
import Result from './Result';
import styles from './Game.module.css';

export default function Game() {
	const [state, dispatch] = useGameData();
	return (
		<article className={styles.game}>
			{state.isUserPicked ? <Result /> : <UserChoice />}
		</article>
	);
}
