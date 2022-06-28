import { createAction, createReducer } from '@reduxjs/toolkit'

const defaultState = {
    count: 0,
    blocked: false
}

export const increment = createAction('ADD_1');
export const setCount = createAction('SET_COUNT', payload => ({payload}));
export const toggleCounter = createAction('TOGGLE_COUNTER');

export const countReducer = createReducer(defaultState, {
  [increment]: ({ count, blocked, ...restState }) => ({
    ...restState, 
    blocked,
    count: blocked 
      ? count 
      : count + 1
  }),

  [setCount]: ({ count, blocked, ...restState }, { payload }) => ({
    ...restState, 
    blocked,
    count: blocked 
      ? count 
      : Number(payload)
  }),

  [toggleCounter]: ({ blocked, ...restState }) => ({
    ...restState, 
    blocked: !blocked
  })
});

export const isBlocked = (state) => state?.count?.blocked ?? false;
export const getCount = (state) => state?.count?.count ?? 0;



