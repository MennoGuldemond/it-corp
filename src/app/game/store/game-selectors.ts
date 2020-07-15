import { createSelector } from '@ngrx/store';
import { GameState } from './game.reducer';

export const selectGameDate = (state: GameState) => state.date;

export const selectDate = createSelector(
  selectGameDate, (date: Date) => date
);
