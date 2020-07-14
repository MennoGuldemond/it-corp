import { Component } from '@angular/core';

import { GameService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'it-corp-app';

  constructor(gameService: GameService) {
    gameService.start();
  }
}
