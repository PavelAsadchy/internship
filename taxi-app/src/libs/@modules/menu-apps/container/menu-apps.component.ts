import { animate, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu-apps',
  templateUrl: './menu-apps.component.html',
  styleUrls: ['./menu-apps.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({
          opacity: 0,
        }),
        animate(
          '.5s ease-out',
          style({
            opacity: 1,
          })
        ),
      ]),
      transition(':leave', [
        style({
          opacity: 1,
        }),
        animate(
          '.5s ease-in',
          style({
            opacity: 0,
          })
        ),
      ]),
    ]),
  ],
})
export class MenuAppsComponent {
  isDropDownMenu = false;

  @ViewChild('toggleAppsMenu', { read: ElementRef }) toggleAppsMenu: ElementRef;
  @ViewChild('appsMenu', { read: ElementRef }) appsMenu: ElementRef;

  constructor(private renderer: Renderer2) {
    this.renderer.listen('window', 'click', (event: Event) => {
      if (
        this.isDropDownMenu &&
        event.target !== this.toggleAppsMenu.nativeElement &&
        event.target !== this.appsMenu.nativeElement
      ) {
        this.isDropDownMenu = false;
      }
    });
  }

  onDropDownMenuToggle(): void {
    this.isDropDownMenu = !this.isDropDownMenu;
  }
}
