import { Component } from '@angular/core';

@Component({
  selector: 'app-drop-off',
  templateUrl: './drop-off.component.html',
  styleUrls: ['./drop-off.component.scss']
})
export class DropOffComponent {

  public dropOffAddressSelect: string;

  public dropOffAddress: string[] = [
    'Address',
    'Airport',
    'Rocco',
    'Head Office',
    'Indefinite',
  ]
}
