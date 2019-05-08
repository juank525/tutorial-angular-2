import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

//@Injectable () 
//No es necesario injectar en el provider del modulo
//Automaticamente injecta un servicio
@Injectable({
  providedIn: 'root'
})
export class SpotyfyService {

  constructor(private http:HttpClient) { }

  getQuery(query: string){
    const URL = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDowZaXacRqLrl1y7PM9Od8jjTJ-DNkkgzk2vTSzS4cUUgg7E660FvqyORKSneviosuzNoWL0kTWq8cRiA'
    });

    return this.http.get(URL,{headers});
  }

  getNewReleases(){
    return (this.getQuery('browse/new-releases')
    .pipe(
       map(data => {
        return data['albums'].items;
       })
    ));
  }

  getArtistas(termino: string) {
    return (this.getQuery(`search?q=${termino}&type=artist`)
    .pipe(
      map((data: any) => {
        return data.artists.items;
      })
    ));
  }

  getArtista(id: string) {
    return (this.getQuery(`artists/${id}`)
    .pipe(
      map((data: any) => {
        return data;
      })
    ));
  }

  getTopTracks(id: string) {
    return (this.getQuery(`artists/${id}/top-tracks?country=us`)
    .pipe(
      map((data: any) => {
        return data['tracks'];
      })
    ));
  }

 

}
