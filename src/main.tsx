import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { GameState } from './context/GameState';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<GameState>
			<App />
		</GameState>
	</React.StrictMode>
);
