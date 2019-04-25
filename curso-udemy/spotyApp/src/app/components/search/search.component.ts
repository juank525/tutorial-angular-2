import { Component, OnInit } from '@angular/core';
import { SpotyfyService } from '../../services/spotyfy.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  artists: any[] = [];
  constructor(private spotyfyService: SpotyfyService) { }

  ngOnInit() {
  }

  search(termino: string) {
    console.log(termino);
    this.spotyfyService.getArtista(termino).subscribe(
      (response: any) => {
        console.log("***** ARTISTAS ******");
        console.log(response);
        this.artists = response;
      }
    )
  }

}
