import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { GameComponent } from './game/game.component';
import { AppRoutingModule } from './app-routing.module';
import { AllGamesComponent } from './all-games/all-games.component';
import { CommentComponent } from './game/comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    AllGamesComponent,
    CommentComponent,
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
