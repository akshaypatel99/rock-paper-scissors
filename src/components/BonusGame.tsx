import { useGameData } from '../context/GameState';
import Result from './Result';
import styles from './Game.module.css';
import BonusUserChoice from './BonusUserChoice';

export default function Game() {
	const [state, dispatch] = useGameData();
	return (
		<article className={styles.game}>
			{state.isUserPicked ? <Result /> : <BonusUserChoice />}
		</article>
	);
}
