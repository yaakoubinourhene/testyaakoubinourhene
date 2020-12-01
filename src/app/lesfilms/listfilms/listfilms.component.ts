import { Component, OnInit } from '@angular/core';
import { film } from 'src/app/model/film';

@Component({
  selector: 'nour-listfilms',
  templateUrl: './listfilms.component.html',
  styleUrls: ['./listfilms.component.css']
})
export class ListfilmsComponent implements OnInit {
  films: film[] = [
    {titre:'Anges & Démons', affiche:'assets/ange.jpg', duree:121, nouveau:true},
    {titre:'Coco', affiche:'assets/coco.jpg', duree:88, nouveau:false},
    {titre:'Coeur Nomade', affiche:'assets/Films/nomade.bmp', duree:97, nouveau:false}
      ];
     
 nbfilms(n:number){
    let nb =0;
if (this.films[n].duree>=120){
  nb++;

}
};
  constructor() { }

  ngOnInit(): void {
  }

}
