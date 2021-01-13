import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-name',
  templateUrl: './edit-name.component.html',
  styleUrls: ['./edit-name.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditNameComponent {
  @Input()
  parentGroup: FormGroup;
}
