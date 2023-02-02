import { fetchGame, generateBonusResult, generateResult, saveGame, switchMode } from "../game";

export type State = {
  score: number,
  userPick: string,
  housePick: string,
  result: string,
  isUserPicked: boolean,
  isHousePicked: boolean,
  mode: string
}

const { score, mode } = fetchGame();

const initialScore = parseInt(score) || 0;
const initialMode = mode || 'classic';

export const initialState: State = { score: initialScore, userPick: '', housePick: '', result: '', isUserPicked: false, isHousePicked: false, mode: initialMode };

export const enum REDUCER_ACTION_TYPE {
	INCREMENT,
	DECREMENT,
	USER_PICK,
	HOUSE_PICK,
  RESULT,
  IS_USER_PICKED,
  IS_HOUSE_PICKED,
  REPLAY,
  SWITCH_MODE,
  SAVE
}

export type ReducerAction = {
	type: REDUCER_ACTION_TYPE;
	payload?: string;
};

export default (state: typeof initialState,
  action: ReducerAction): typeof initialState => {
    switch (action.type) {
      case REDUCER_ACTION_TYPE.INCREMENT:
        {
          const newScore = state.score + 1;
          saveGame(newScore, state.mode);
          return { ...state, score: newScore };
        }
      case REDUCER_ACTION_TYPE.DECREMENT:
        {
          const newScore = state.score - 1;
          saveGame(newScore, state.mode);
          return { ...state, score: newScore };
        }
      case REDUCER_ACTION_TYPE.USER_PICK:
        return { ...state, userPick: action.payload ?? '' };
      case REDUCER_ACTION_TYPE.HOUSE_PICK:
        return { ...state, housePick: action.payload ?? '' };
      case REDUCER_ACTION_TYPE.RESULT:
        {
          if (state.mode === 'classic') {
            const newResult = generateResult(state.userPick, state.housePick) ?? ''
            return { ...state, result: newResult };
          } else {
            const newBonusResult = generateBonusResult(state.userPick, state.housePick) ?? ''
            return { ...state, result: newBonusResult };
          }
        }
      case REDUCER_ACTION_TYPE.IS_USER_PICKED:
        return { ...state, isUserPicked: true };
      case REDUCER_ACTION_TYPE.IS_HOUSE_PICKED:
        return { ...state, isHousePicked: true };
      case REDUCER_ACTION_TYPE.REPLAY:
        return { ...state, userPick: '', housePick: '', result: '', isUserPicked: false, isHousePicked: false };
      case REDUCER_ACTION_TYPE.SWITCH_MODE:
        {
          const newMode = state.mode === 'classic' ? 'bonus' : 'classic'
          const newScore = switchMode(newMode);
          return { ...state, mode: newMode, score: parseInt(newScore)}
        }
      case REDUCER_ACTION_TYPE.SAVE:
        saveGame(state.score, state.mode);
        return state;
      default:
        throw new Error();
    }
  }