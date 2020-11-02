import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/shared/consts/menu.const';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public menuContent = Menu;

  constructor() { }

  ngOnInit(): void {
  }

}
