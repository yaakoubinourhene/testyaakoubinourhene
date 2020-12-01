import { Component, OnInit, Input } from '@angular/core';
import { film } from 'src/app/model/film';
@Component({
  selector: 'nour-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  @Input() fil: film;

  constructor() { }

  ngOnInit(): void {
  }

}
