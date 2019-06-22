import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { GameComponent } from './game/game.component';
import { AppRoutingModule } from './app-routing.module';
import { AllGamesComponent } from './all-games/all-games.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    AllGamesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
