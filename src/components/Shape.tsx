import { useContext } from 'react';
import GameContext from '../context/GameContext';
import { setIsUserPicked, setUserPick } from '../context/GameAction';
import styles from './Shape.module.css';

type ShapeProps = {
	shapeOption: string;
	isWinner?: boolean;
	isPick: boolean;
};

export default function Shape({ shapeOption, isWinner, isPick }: ShapeProps) {
	const [state, dispatch] = useContext(GameContext);

	let img;
	if (shapeOption.length > 0) {
		img = (
			<img src={`./images/icon-${shapeOption}.svg`} className={styles.shape} />
		);
	}

	function userSelects() {
		setUserPick(dispatch, shapeOption);
		setIsUserPicked(dispatch);
	}

	return (
		<button
			className={[styles.button, styles[`${shapeOption}`]].join(' ')}
			data-shape={shapeOption}
			data-winner={isWinner}
			data-pick={isPick}
			disabled={isPick}
			onClick={userSelects}>
			<span className='sr-only'>{shapeOption}</span>
			{img}
		</button>
	);
}
