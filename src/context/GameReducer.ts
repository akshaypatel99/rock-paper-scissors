import { fetchResult, generateResult, saveResult } from "../game";

export type State = {
  score: number,
  userPick: string,
  housePick: string,
  result: string,
  isUserPicked: boolean,
  isHousePicked: boolean,
}

const initialScore = parseInt(fetchResult());

export const initialState: State = { score: initialScore, userPick: '', housePick: '', result: '', isUserPicked: false, isHousePicked: false };

export const enum REDUCER_ACTION_TYPE {
	INCREMENT,
	DECREMENT,
	USER_PICK,
	HOUSE_PICK,
  RESULT,
  IS_USER_PICKED,
  IS_HOUSE_PICKED,
  REPLAY
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
          saveResult(newScore);
          return { ...state, score: newScore };
        }
      case REDUCER_ACTION_TYPE.DECREMENT:
        {
          const newScore = state.score - 1;
          saveResult(newScore);
          return { ...state, score: newScore };
        }
      case REDUCER_ACTION_TYPE.USER_PICK:
        return { ...state, userPick: action.payload ?? '' };
      case REDUCER_ACTION_TYPE.HOUSE_PICK:
        return { ...state, housePick: action.payload ?? '' };
      case REDUCER_ACTION_TYPE.RESULT:
        return { ...state, result: generateResult(state.userPick, state.housePick) ?? '' };
      case REDUCER_ACTION_TYPE.IS_USER_PICKED:
        return { ...state, isUserPicked: true };
      case REDUCER_ACTION_TYPE.IS_HOUSE_PICKED:
        return { ...state, isHousePicked: true };
      case REDUCER_ACTION_TYPE.REPLAY:
        return { ...state, userPick: '', housePick: '', result: '', isUserPicked: false, isHousePicked: false };
      default:
        throw new Error();
    }
  }