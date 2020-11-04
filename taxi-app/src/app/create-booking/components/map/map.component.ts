import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  public latitude: number = 53.8847208;
  public longitude: number = 27.5233291;

  constructor() { }

  ngOnInit(): void {
  }

}
