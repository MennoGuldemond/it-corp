import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared/shared.module';
import { GameRoutingModule } from './game-routing.module';

import * as fromGame from './store/game.reducer';
import { GameComponent } from './game.component';

@NgModule({
  declarations: [
    GameComponent,
  ],
  imports: [
    SharedModule,
    GameRoutingModule,
    StoreModule.forFeature('game', fromGame.reducer),
  ],
  providers: [],
  bootstrap: []
})
export class GameModule { }
