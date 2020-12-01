import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmComponent } from './lesfilms/film/film.component';
import { ListfilmsComponent } from './lesfilms/listfilms/listfilms.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmComponent,
    ListfilmsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
