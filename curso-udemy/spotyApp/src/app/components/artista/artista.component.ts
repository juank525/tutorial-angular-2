import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotyfyService } from 'src/app/services/spotyfy.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {

  artist: any;
  loading: boolean;
  topTracks: any[];
  constructor(private activatedRoute: ActivatedRoute, private spotyfyService : SpotyfyService ) { 
    this.activatedRoute.params.subscribe(params => {
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  ngOnInit() {
  }

  getArtista(idArtista: string){
    this.loading = true;
    this.spotyfyService.getArtista(idArtista).subscribe(
      (response: any) => {
        console.log(response);
        this.artist = response;
        this.loading = false;
      }
    )  
  }

  getTopTracks(idArtista: string){
    this.loading = true;
    this.spotyfyService.getTopTracks(idArtista).subscribe(
      (response: any) => {
        console.log(response);
        this.topTracks = response;
      }
    )  
  }
  
}
