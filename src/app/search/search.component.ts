import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums/albums.service';
import { Album } from '../albums/album.model';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  isLoading: Boolean = false;
  noResults: Boolean = false;
  searchInput: FormControl;
  searchValue;
  album: Album;

  constructor(public albumsService: AlbumsService, private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Albums App | Search');
    this.searchInput = new FormControl();
    this.searchInput.valueChanges
        .debounceTime(400)
        .distinctUntilChanged()
        .subscribe(value => this.getAlbum(value));
  }

  getAlbum(id) {
    this.isLoading = true;
    this.noResults = false;
    this.album = null;
    this.searchValue = id;
    if (id) {
      this.albumsService.getAlbum(id).subscribe(album => {
        this.album = album;
        this.isLoading = false;
      }, error => {
        this.isLoading = false;
        this.noResults = true;
      });
    } else {
      this.isLoading = false;
    }
  }
}
