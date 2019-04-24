import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

//@Injectable () 

//No es necesario injectar en el provider del modulo
//Automaticamente injecta un servicio
@Injectable({
  providedIn: 'root'
})
export class SpotyfyService {

  constructor(private http:HttpClient) { }

  getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': ''
    });

   return this.http.get("https://api.spotify.com/v1/browse/new-releases", {headers});
    
  }

  getArtista(termino: string) {
    const headers = new HttpHeaders({
      'Authorization': ''
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist`, {headers});
  }
}
