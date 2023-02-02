import { useGameData } from '../context/GameState';
import { switchMode } from '../context/GameAction';

export default function BonusGameButton() {
	const [state, dispatch] = useGameData();

	function switchGames() {
		switchMode(dispatch);
	}
	return (
		<button
			className='button switch-mode'
			disabled={state.isUserPicked}
			onClick={switchGames}>
			{state.mode === 'classic' ? 'Bonus Mode' : 'Classic Mode'}
		</button>
	);
}
