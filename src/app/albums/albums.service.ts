import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Album } from './album.model';
import { environment } from '../../environments/environment';

@Injectable()
export class AlbumsService {

  api = `${environment.apiUrl}/albums`;

  constructor(private http: HttpClient) { }

  getAlbums(currentPage): Observable<HttpResponse<Album[]>> {
    return this.http.get<Album[]>(`${this.api}?_page=${currentPage}`, { observe: 'response' });
  }

  getAlbum(id): Observable<Album> {
    return this.http.get<Album>(`${this.api}/${id}`);
  }

}
