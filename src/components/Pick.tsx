import React from 'react';

import Shape from './Shape';
import { useGameData } from '../context/GameState';
import styles from './Pick.module.css';

export default function Pick({
	title,
	shape,
	isWinner,
}: {
	title: string;
	shape: string;
	isWinner: boolean;
}) {
	const [state, dispatch] = useGameData();

	return (
		<div className={styles.pick}>
			<p className={styles.title}>{title}</p>
			<Shape shapeOption={shape} isPick={true} isWinner={isWinner} />
		</div>
	);
}
