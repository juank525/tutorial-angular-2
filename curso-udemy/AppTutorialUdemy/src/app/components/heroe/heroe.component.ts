import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IHeroe, HeroesService } from '../../services/heroes.services';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: IHeroe;

  constructor(private _activatedRoute: ActivatedRoute, private _heroesService: HeroesService) {
      this._activatedRoute.params.subscribe(params => {
        this.heroe = _heroesService.getHeroe(params['id']);
      console.log(this.heroe);
    });
  }

  ngOnInit() {
  }

}
