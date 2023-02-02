import { useEffect } from 'react';
import { useGameData } from '../context/GameState';
import { decrementScore, incrementScore, reset } from '../context/GameAction';
import styles from './Outcome.module.css';

export default function Outcome() {
	const [state, dispatch] = useGameData();

	useEffect(() => {
		if (state.result === 'You Win') {
			incrementScore(dispatch);
			console.log('hello');
		} else if (state.result === 'You Lose') {
			decrementScore(dispatch);
			console.log('bye');
		} else if (state.result === "It's a draw") {
			return;
		} else {
			throw new Error('Outcome error');
		}
	}, []);

	return (
		<div className={styles.outcome}>
			<p className={styles.outcome_result}>{state.result}</p>
			<button onClick={() => reset(dispatch)} className={styles.outcome_button}>
				Play Again
			</button>
		</div>
	);
}
