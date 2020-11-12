import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnDestroy, Output, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { IPickUp } from 'src/app/shared/models/bookingOptions.model';

@Component({
  selector: 'app-pick-up',
  templateUrl: './pick-up.component.html',
  styleUrls: ['./pick-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PickUpComponent implements AfterViewInit, OnDestroy {

  private sub: Subscription;

  @Input()
  parentForm: FormGroup;

  @Input()
  pickUp: IPickUp;

  @Output()
  onChanged: EventEmitter<IPickUp> = new EventEmitter<IPickUp>();

  @ViewChild('addressInput', { read: ElementRef })
  addressInput: ElementRef;

  ngAfterViewInit(): void {
    this.sub = fromEvent(this.addressInput.nativeElement, 'keyup')
      .pipe(
        map((event: any) => event.target.value),
        filter(res => res.length > 3),
        debounceTime(1000),
        distinctUntilChanged()
      ).subscribe((address: string) => {
        this.onChanged.emit(this.pickUp);
      });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onChange(): void {
    this.onChanged.emit(this.pickUp);
  }
}
