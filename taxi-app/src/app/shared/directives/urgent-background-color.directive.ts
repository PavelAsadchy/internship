import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appUrgentBackgroundColor]',
})
export class UrgentBackgroundColorDirective implements OnInit {
  backgroundColor: string;

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {}

  public ngOnInit(): void {
    this.setBackgroundColor();
    this.renderer2.setStyle(
      this.elementRef.nativeElement,
      'background',
      `${this.backgroundColor}`
    );
    // this.elementRef.nativeElement.style.backgroundColor = 'red';
  }

  setBackgroundColor() {
    this.backgroundColor = 'red';
  }
}
