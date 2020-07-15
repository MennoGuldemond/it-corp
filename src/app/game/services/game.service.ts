import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { GameState } from '../store/game.reducer';
import { GameActions } from '../store/game.actions';
import { GameSpeed } from '../../models/game-constants';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private store: Store<GameState>) { 
    this.store.select(state => state).subscribe(x => console.log(x));
  }

  public gameSpeed: GameSpeed = GameSpeed.X1;

  public start(): void {
    this.store.select(state => state.gameSpeed).subscribe(x => console.log(x));

    setInterval(() => {
      this.update();
    }, this.gameSpeed);
  }

  pause(): void {

  }

  private update(): void {
    this.store.dispatch(GameActions.nextDay());
  }

}
