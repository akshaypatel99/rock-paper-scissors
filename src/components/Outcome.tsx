import { useEffect } from 'react';
import { useGameData } from '../context/GameState';
import {
	decrementScore,
	incrementScore,
	replay,
	saveGame,
} from '../context/GameAction';
import styles from './Outcome.module.css';

export default function Outcome() {
	const [state, dispatch] = useGameData();

	useEffect(() => {
		if (state.result === 'You Win') {
			incrementScore(dispatch);
		} else if (state.result === 'You Lose') {
			decrementScore(dispatch);
		} else if (state.result === "It's a draw") {
			saveGame(dispatch);
			return;
		} else {
			throw new Error('Outcome error');
		}
	}, []);

	return (
		<div className={styles.outcome}>
			<p className={styles.outcome_result}>{state.result}</p>
			<button
				onClick={() => replay(dispatch)}
				className={styles.outcome_button}>
				Play Again
			</button>
		</div>
	);
}
