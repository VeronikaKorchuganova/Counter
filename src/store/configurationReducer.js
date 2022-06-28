import { createAction, createReducer } from '@reduxjs/toolkit'

export const GRID_POSITION = 0;
export const VERTICAL_POSITION = 1;

const defaultState = {
    state: GRID_POSITION
}

export const setPosition = createAction('SET_POSITION');

export const configurationReducer = createReducer(defaultState, {
  [setPosition]: ({ state, ...restState }) => ({ 
    ...restState, 
    state: state === GRID_POSITION 
      ? VERTICAL_POSITION 
      : GRID_POSITION 
  })
});

export const getState = state => state.configuration?.state;

