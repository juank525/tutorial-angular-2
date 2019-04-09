import { Component, OnInit } from '@angular/core';
import { HeroesService, IHeroe } from '../../services/heroes.services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-buscar1',
  templateUrl: './buscar1.component.html',
  styleUrls: ['./buscar1.component.css']
})
export class Buscar1Component implements OnInit {

  heroes: IHeroe[] = [];
  termino: string;

  constructor(private _heroesService: HeroesService, private _activatedRoute: ActivatedRoute, private router: Router ) {
      this._activatedRoute.params.subscribe(params => {
        this.termino = params['termino'];
        this.heroes = _heroesService.buscarHeroes(params['termino']);
    });
  }

  ngOnInit() {
  }

  verHeroe(id: number) {
    this.router.navigate( ['/heroe', id]);
  }
}
