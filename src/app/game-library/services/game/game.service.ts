import { Injectable } from '@angular/core';
import { Game } from '../../models/game';
import { Genre } from '../../enums/genre';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  games: Game[] = [];

  constructor() {
    this.games = [
      new Game(1, 'Starcraft II', Genre.RTS),
      new Game(2, 'FIFA 2019', Genre.SPORT),
      new Game(3, 'Counter-Strike', Genre.FPS),
      new Game(4, 'Battlefield 2', Genre.FPS),
      new Game(5, 'Overwatch', Genre.FPS),
      new Game(6, 'Warcraft III', Genre.RTS),
      new Game(7, 'NBA 2k19', Genre.SPORT),
      new Game(8, 'Titanfall 2', Genre.FPS),
      new Game(9, 'Destiny 2', Genre.FPS),
      new Game(10, 'Company of Heroes 2', Genre.RTS),
      new Game(11, 'Age of Mythology', Genre.RTS),
      new Game(12, 'Divinity: Original Sin 2', Genre.RPG),
      new Game(13, 'The Witcher 3: Wild Hunt', Genre.RPG),
      new Game(14, 'Neverwinter Nights', Genre.RPG),
      new Game(15, 'Mass Effect', Genre.RPG),
    ];
  }

  getGames(): Observable<Game[]> {
    return of(this.games).pipe(
      delay(3000)
    );
  }
}
