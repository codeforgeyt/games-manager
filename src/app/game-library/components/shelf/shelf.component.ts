import { Component, OnInit, ViewChild } from '@angular/core';
import { Game } from '../../models/game';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { GameService } from '../../services/game/game.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddGameModalComponent } from '../add-game-modal/add-game-modal.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'cf-shelf',
  templateUrl: './shelf.component.html',
  styleUrls: ['./shelf.component.scss']
})
export class ShelfComponent implements OnInit {

  isSpinnerDisplayed = false;
  gamesDataSource: MatTableDataSource<Game> = new MatTableDataSource<Game>();
  displayedColumns: string[] = [];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private gameService: GameService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog,
  ) {
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

  filter(filterValue: string) {
    this.gamesDataSource.filter = filterValue.trim().toLocaleLowerCase();
  }

  addGame() {
    const dialogRef = this.openAddGameModal();
    this.handleClosingAddGameModal(dialogRef);
  }

  private openAddGameModal() {
    return this.dialog.open(AddGameModalComponent, {
      width: '300px',
    });
  }

  private handleClosingAddGameModal(dialogRef: MatDialogRef<AddGameModalComponent>) {
    dialogRef.afterClosed().subscribe((game: Game) => {
      if (game === undefined) {
        this.snackBar.open('Adding game canceled!', 'Close', { duration: 2000 });
      } else {
        this.gameService.addGame(game).subscribe((addedGame: Game) => {
          this.snackBar.open(`Game "${addedGame.title}" has been added!`, 'Close', { duration: 2000 });
          this.gamesDataSource._updateChangeSubscription();
        });
      }
    });
  }
}
