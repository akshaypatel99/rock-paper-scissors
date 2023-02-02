import { useEffect } from 'react';
import Pick from './Pick';
import { useGameData } from '../context/GameState';
import {
	getResult,
	setHousePick,
	setIsHousePicked,
} from '../context/GameAction';
import { generateHousePick, generateBonusHousePick } from '../game';
import styles from './Result.module.css';
import Outcome from './Outcome';

export default function Result() {
	const [state, dispatch] = useGameData();

	useEffect(() => {
		if (state.mode === 'classic') {
			setTimeout(() => {
				const housePick = generateHousePick();
				setHousePick(dispatch, housePick);
				setIsHousePicked(dispatch);
				getResult(dispatch);
			}, 1000);
		} else {
			setTimeout(() => {
				const housePick = generateBonusHousePick();
				setHousePick(dispatch, housePick);
				setIsHousePicked(dispatch);
				getResult(dispatch);
			}, 1000);
		}
	}, []);

	return (
		<div className={styles.result}>
			<Pick
				title='You Picked'
				shape={state.userPick}
				isWinner={state.result === 'You Win'}
			/>
			{state.isHousePicked && <Outcome />}
			<Pick
				title='The House Picked'
				shape={state.housePick}
				isWinner={state.result === 'You Lose'}
			/>
		</div>
	);
}
