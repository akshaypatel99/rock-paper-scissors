import { Dispatch } from "react";
import { REDUCER_ACTION_TYPE, ReducerAction } from "./GameReducer";

export const setUserPick = (dispatch: Dispatch<ReducerAction>, shape: string): void => {
  return dispatch({
    type: REDUCER_ACTION_TYPE.USER_PICK,
    payload: shape
  })
}

export const setHousePick = (dispatch: Dispatch<ReducerAction>, shape: string): void => {
  return dispatch({
    type: REDUCER_ACTION_TYPE.HOUSE_PICK,
    payload: shape
  })
}

export const setIsUserPicked = (dispatch: Dispatch<ReducerAction>): void => {
  return dispatch({
    type: REDUCER_ACTION_TYPE.IS_USER_PICKED
  })
}

export const setIsHousePicked = (dispatch: Dispatch<ReducerAction>): void => {
  return dispatch({
    type: REDUCER_ACTION_TYPE.IS_HOUSE_PICKED
  })
}

export const getResult = (dispatch: Dispatch<ReducerAction>): void => {
  return dispatch({
    type: REDUCER_ACTION_TYPE.RESULT
  })
}

export const incrementScore = (dispatch: Dispatch<ReducerAction>): void => {
  return dispatch({
    type: REDUCER_ACTION_TYPE.INCREMENT
  })
}

export const decrementScore = (dispatch: Dispatch<ReducerAction>): void => {
  return dispatch({
    type: REDUCER_ACTION_TYPE.DECREMENT
  })
}

export const replay = (dispatch: Dispatch<ReducerAction>): void => {
  return dispatch({
    type: REDUCER_ACTION_TYPE.REPLAY
  })
}

export const switchMode = (dispatch: Dispatch<ReducerAction>): void => {
  return dispatch({
    type: REDUCER_ACTION_TYPE.SWITCH_MODE
  })
}