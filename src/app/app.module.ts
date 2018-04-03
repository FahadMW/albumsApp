import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from './header/header.module';
import { AlbumsModule } from './albums/albums.module';
import { SearchModule } from './search/search.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HeaderModule,
    AlbumsModule,
    SearchModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
