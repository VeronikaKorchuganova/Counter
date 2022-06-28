import { createAction, createReducer } from '@reduxjs/toolkit'

const defaultState = {
    info: undefined,
}

export const deleteInfo = createAction('CLEAR_INFO');
export const getInfo = createAction('GET_INFO', payload => ({payload}));

export const infoReducer = createReducer(defaultState, {
  [deleteInfo]: (state) => ({...state, info: ''}),
  [getInfo]: (state, {payload}) => ({...state, info: payload})
});

export const setInfo = (state) => state?.info?.info ?? "";