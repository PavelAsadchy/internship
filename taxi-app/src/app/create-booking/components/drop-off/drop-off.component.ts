import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { IDropOff } from 'src/app/shared/models/bookingOptions.model';

@Component({
  selector: 'app-drop-off',
  templateUrl: './drop-off.component.html',
  styleUrls: ['./drop-off.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropOffComponent {

  private sub: Subscription;

  @Input()
  parentForm: FormGroup;

  @Input()
  dropOff: IDropOff;

  @Output()
  onChanged: EventEmitter<IDropOff> = new EventEmitter<IDropOff>();

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
        this.onChanged.emit(this.dropOff);
      });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onChange(): void {
    this.onChanged.emit(this.dropOff);
  }
}
