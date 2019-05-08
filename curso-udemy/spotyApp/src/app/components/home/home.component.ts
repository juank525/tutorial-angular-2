import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotyfyService } from 'src/app/services/spotyfy.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  songs: any[];
  loading: boolean;
  constructor(private spotyfyService: SpotyfyService) {
    this.loading = true;
  }

  ngOnInit() {
    this.spotyfyService.getNewReleases().subscribe(
      (response: any) => {
        console.log(response);
        this.songs = response;
        this.loading = false;
      } 
    )
  }

}
