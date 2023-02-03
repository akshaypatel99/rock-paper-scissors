import './App.css';
import { useGameData } from './context/GameState';
import Game from './components/Game';
import Header from './components/Header';
import { useState } from 'react';
import Modal from './components/Modal';
import BonusGame from './components/BonusGame';
import BonusGameButton from './components/BonusGameButton';
import ModalButton from './components/ModalButton';

function App() {
	const [state, dispatch] = useGameData();
	const [showModal, setShowModal] = useState<boolean>(false);

	return (
		<main className='App'>
			<Header />
			{state.mode === 'classic' ? <Game /> : <BonusGame />}
			<BonusGameButton />
			<ModalButton showModal={showModal} setShowModal={setShowModal} />
			<Modal showModal={showModal} setShowModal={setShowModal} />
		</main>
	);
}

export default App;
