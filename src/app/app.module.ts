import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameLibraryModule } from './game-library/game-library.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GameLibraryModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
