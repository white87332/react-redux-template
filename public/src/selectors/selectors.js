import { createSelector } from 'reselect';

const selectCounter = state => state.counter;

export const makeCounterSelector = () => createSelector(
    selectCounter,
    state => state
);
