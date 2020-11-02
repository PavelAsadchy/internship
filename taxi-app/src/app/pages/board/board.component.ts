import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/shared/consts/menu.const';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  public isNavActive = false;

  public menuContent = Menu;

  constructor() { }

  ngOnInit(): void {
  }

  public navToggle(): void {
    this.isNavActive = !this.isNavActive;
  }

}
