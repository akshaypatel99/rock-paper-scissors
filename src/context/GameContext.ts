import { createContext, Dispatch } from "react";
import { initialState, ReducerAction, State } from "./GameReducer";

export type GameContextType = [State, Dispatch<ReducerAction>]

export const GameContext = createContext<GameContextType>([initialState, () => {}]);

export default GameContext;