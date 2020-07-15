import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { GameService } from './game.service';
import * as fromGame from '../store/game.reducer';

describe('GameService', () => {
  let service: GameService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(fromGame.reducer),
      ]
    });
    service = TestBed.inject(GameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
