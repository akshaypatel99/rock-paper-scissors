import './App.css';
import { GameState } from './context/GameState';
import Game from './components/Game';
import Header from './components/Header';
import { useState } from 'react';
import Modal from './components/Modal';

function App() {
	const [showModal, setShowModal] = useState<boolean>(false);

	return (
		<GameState>
			<main className='App'>
				<Header />
				<Game />
				<Modal showModal={showModal} setShowModal={setShowModal} />
				<button
					className='rules-button'
					onClick={() => setShowModal(!showModal)}>
					Rules
				</button>
			</main>
		</GameState>
	);
}

export default App;
