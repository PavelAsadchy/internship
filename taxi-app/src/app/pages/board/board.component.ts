import { Component } from '@angular/core';
import { Menu } from 'src/app/shared/consts/menu.const';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {

  public isNavActive = false;

  public menuContent = Menu;

  public navToggle(): void {
    this.isNavActive = !this.isNavActive;
  }

}
