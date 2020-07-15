import { createAction, props } from '@ngrx/store';

import { GameSpeed } from '../../models/game-constants';

export const NEXT_DAY = '[GAME] NEXT_DAY';
export const SET_GAME_SPEED = '[GAME] SET_GAME_SPEED';

export const nextDay = createAction(NEXT_DAY);
export const setGameSpeed = createAction(SET_GAME_SPEED, props<{ speed: GameSpeed }>());

export const GameActions = {
  nextDay,
  setGameSpeed,
};
