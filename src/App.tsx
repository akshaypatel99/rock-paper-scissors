import './App.css';
import { GameState, useGameData } from './context/GameState';
import Game from './components/Game';
import Header from './components/Header';
import { useState } from 'react';
import Modal from './components/Modal';
import BonusGame from './components/BonusGame';
import BonusGameButton from './components/BonusGameButton';

function App() {
	const [state, dispatch] = useGameData();
	const [showModal, setShowModal] = useState<boolean>(false);

	return (
		<GameState>
			<main className='App'>
				<Header />
				<Game />
				<Modal showModal={showModal} setShowModal={setShowModal} />
				<button
					className='button rules'
					onClick={() => setShowModal(!showModal)}>
					Rules
				</button>
				{/* <button
					className='button switch-mode'
					disabled={state.isUserPicked}
					onClick={switchGameMode}>
					{state.mode === 'classic' ? 'Bonus Mode' : 'Classic Mode'}
				</button> */}
				{state.mode}
				<BonusGameButton />
			</main>
		</GameState>
	);
}

export default App;
