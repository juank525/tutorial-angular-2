import { Component, OnInit } from '@angular/core';
import { SpotyfyService } from '../../services/spotyfy.service';
import { LoadingComponent } from '../shared/loading/loading.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  artists: any[] = [];
  loading: boolean;
  constructor(private spotyfyService: SpotyfyService) { }
  ngOnInit() {
  }

  search(termino: string) {
    console.log(termino);
    this.loading = true;
    this.spotyfyService.getArtistas(termino).subscribe(
      (response: any) => {
        console.log(response);
        this.artists = response;
        this.loading = false;
      }
    )
  }

}
