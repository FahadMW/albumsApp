import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumsService } from './albums.service';
import { AlbumsComponent } from './albums.component';
import { AlbumItemComponent } from './album-item/album-item.component';
import { LoadingModule } from '../shared/loading/loading.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    AlbumsRoutingModule,
    LoadingModule
  ],
  declarations: [
    AlbumsComponent,
    AlbumItemComponent,
  ],
  exports: [
    AlbumsComponent
  ],
  providers: [
    AlbumsService
  ]
})
export class AlbumsModule { }
