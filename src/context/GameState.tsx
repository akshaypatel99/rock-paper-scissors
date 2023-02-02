import { ReactNode, useContext, useReducer } from 'react';
import GameReducer, { initialState } from './GameReducer';
import GameContext, { GameContextType } from './GameContext';

export function GameState({ children }: { children: ReactNode }) {
	const [state, dispatch] = useReducer(GameReducer, initialState);

	return (
		<GameContext.Provider value={[state, dispatch]}>
			{children}
		</GameContext.Provider>
	);
}

export function useGameData(): GameContextType {
	const [state, dispatch] = useContext(GameContext);
	return [state, dispatch];
}
