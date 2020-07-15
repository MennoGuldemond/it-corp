import { createReducer, on } from '@ngrx/store';
import { GameActions } from './game.actions';
import { GameSpeed } from '../../models/game-constants';

export interface GameState {
  date: Date;
  gameSpeed: GameSpeed;
}

export const initialState: GameState = {
  date: new Date('1-1-2010'),
  gameSpeed: GameSpeed.X1,
};

export const _gameReducer = createReducer(
  initialState,
  on(GameActions.nextDay, (state) => {
    const tommorow = new Date(state.date);
    tommorow.setDate(tommorow.getDate() + 1);
    return {
      ...state,
      date: tommorow,
    };
  }),
  on(GameActions.setGameSpeed, (state, payload) => {
    return {
      ...state,
      gameSpeed: payload.speed,
    };
  })
);

export function reducer(state: GameState | undefined, action) {
  return _gameReducer(state, action);
}
