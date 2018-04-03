import { Component, OnInit } from '@angular/core';
import { AlbumsService } from './albums.service';
import { Album } from './album.model';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  isLoading: Boolean;
  albums: Album[] = [];
  currentPage = 1;
  isThereMore: Boolean = false;
  isLoadingMore: Boolean = true;

  constructor(public albumsService: AlbumsService, private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Albums App | List');
    this.isLoading = true;
    this.getAlbums();
  }

  getAlbums() {
    this.albumsService.getAlbums(this.currentPage).subscribe(albums => {
      this.albums = this.albums.concat(albums.body);
      this.isLoading = false;
      this.isLoadingMore = false;
      this.isThereMore = this.albums.length < parseInt(albums.headers.get('X-Total-Count'));

    });
    this.currentPage++;
  }

  loadMore() {
    if (!this.isLoadingMore) {
      this.isLoadingMore = true;
      this.getAlbums();
    }
  }

}
