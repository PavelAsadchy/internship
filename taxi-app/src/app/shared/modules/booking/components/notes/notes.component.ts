import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { INotes } from 'src/app/shared/models/booking-options.model';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent {
  @Input()
  parentGroup: FormGroup;

  // @Input()
  // notes: INotes;
}
