import { Component, OnInit } from '@angular/core';
import { Genre } from '../../enums/genre';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { Game } from '../../models/game';

@Component({
  selector: 'cf-add-game-modal',
  templateUrl: './add-game-modal.component.html',
  styleUrls: ['./add-game-modal.component.scss']
})
export class AddGameModalComponent implements OnInit {

  genres: Genre[] = [];
  titleControl = new FormControl('', Validators.required);
  genreControl = new FormControl('', Validators.required);

  constructor(public dialogRef: MatDialogRef<AddGameModalComponent>) {
    this.genres = Object.values(Genre);
  }

  ngOnInit() {
  }


  closeDialog() {
    this.dialogRef.close();
  }

  addGame() {
    if (this.titleControl.valid && this.genreControl.valid) {
      const gameToAdd = new Game(Date.now(), this.titleControl.value, this.genreControl.value);
      this.dialogRef.close(gameToAdd);
    }
  }
}
