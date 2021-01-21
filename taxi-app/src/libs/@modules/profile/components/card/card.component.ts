import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
} from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { ILoggedInUser } from 'src/libs/@shared/models/user-logged.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input()
  user$: Observable<ILoggedInUser>;

  @Output()
  close: EventEmitter<void> = new EventEmitter<void>();

  onClose(): void {
    this.close.emit();
  }
}
