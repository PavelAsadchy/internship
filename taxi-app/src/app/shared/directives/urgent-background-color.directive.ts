import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { PICK_UP_URGENCY_COLORS } from '../consts/booking-options.consts';

@Directive({
  selector: '[appUrgentBackgroundColor]',
})
export class UrgentBackgroundColorDirective implements OnInit {
  @Input()
  pickUpUrgency: string;

  backgroundColor: string;

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {}

  public ngOnInit(): void {
    this.setBackgroundColor();
    this.renderer2.setStyle(
      this.elementRef.nativeElement,
      'background',
      `${this.backgroundColor}`
    );
  }

  setBackgroundColor() {
    this.backgroundColor = PICK_UP_URGENCY_COLORS[this.pickUpUrgency].color;
  }
}
