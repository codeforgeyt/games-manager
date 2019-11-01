import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShelfComponent } from './components/shelf/shelf.component';
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';
import { GameLibraryRoutingModule } from './game-library-routing.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { AddGameModalComponent } from './components/add-game-modal/add-game-modal.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [ShelfComponent, TopNavigationComponent, AddGameModalComponent],
  imports: [
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    CommonModule,
    GameLibraryRoutingModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  exports: [
    ShelfComponent,
    TopNavigationComponent
  ],
  entryComponents: [
    AddGameModalComponent
  ]
})
export class GameLibraryModule { }
