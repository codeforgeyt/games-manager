import { Component, OnInit, ViewChild } from '@angular/core';
import { Game } from '../../models/game';
import { Genre } from '../../enums/genre';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { GameService } from '../../services/game/game.service';

@Component({
  selector: 'cf-shelf',
  templateUrl: './shelf.component.html',
  styleUrls: ['./shelf.component.scss']
})
export class ShelfComponent implements OnInit {

  isSpinnerDisplayed = false;
  gamesDataSource: MatTableDataSource<Game> = new MatTableDataSource<Game>();
  displayedColumns: string[] = [];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private gameService: GameService) {
    this.displayedColumns = ['title', 'genre'];
  }

  ngOnInit() {
    this.gamesDataSource.paginator = this.paginator;
    this.configureSorting();
    this.loadGames();
  }

  private configureSorting() {
    this.sort.active = 'title';
    this.sort.direction = 'asc';
    this.sort.disableClear = true;
    this.gamesDataSource.sort = this.sort;
  }

  private loadGames() {
    this.isSpinnerDisplayed = true;
    this.gameService.getGames().subscribe((games: Game[]) => {
      this.gamesDataSource.data = games;
      this.isSpinnerDisplayed = false;
    });
  }

  filter(filterValue: string){
    this.gamesDataSource.filter = filterValue.trim().toLocaleLowerCase();
  }
}
