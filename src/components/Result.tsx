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
			<div className={styles.result_user_pick}>
				<Pick
					title='You Picked'
					shape={state.userPick}
					isWinner={state.result === 'You Win'}
				/>
			</div>
			<div className={styles.result_outcome}>
				{state.isHousePicked && <Outcome />}
			</div>
			<div className={styles.result_house_pick}>
				<Pick
					title='The House Picked'
					shape={state.housePick}
					isWinner={state.result === 'You Lose'}
				/>
			</div>
		</div>
	);
}
