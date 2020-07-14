import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  public gameSpeed: GameSpeed = GameSpeed.X1;

  private time: Date;
  private startTime: Date = new Date('1-1-2010');

  public start(): void {
    this.time = new Date(this.startTime);

    setInterval(() => {
      this.update();
    }, this.gameSpeed);
  }

  pause(): void {

  }

  private update(): void {
    this.time.setDate(this.time.getDate() + 1);
    console.log(this.time);
  }

}

enum GameSpeed {
  X1 = 1000,
  X2 = 400,
  X3 = 100
}
