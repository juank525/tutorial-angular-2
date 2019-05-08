import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
Router

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  constructor(private router: Router) { }

  @Input() 
  items: any[];

  ngOnInit() {
  }

  getArtits(item: any){
    let idArtist: string;
    if (item.type === "artist"){
      idArtist = item.id;
    }else{
      idArtist = item.artists[0].id;
    }
    console.log("ID: " + idArtist);
    this.router.navigate(['/artist',idArtist]);
  }

}
