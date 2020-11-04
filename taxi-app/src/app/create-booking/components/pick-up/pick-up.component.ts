import { Component } from '@angular/core';

@Component({
  selector: 'app-pick-up',
  templateUrl: './pick-up.component.html',
  styleUrls: ['./pick-up.component.scss']
})
export class PickUpComponent {

  public pickUpTimeSelect: string;

  public pickUpAddressSelect: string;

  public pickUpTime: string[] = [
    'Now',
    'Later',
  ]

  public pickUpAddress: string[] = [
    'Address',
    'Airport',
    'Rocco',
    'Head Office',
  ]
}
