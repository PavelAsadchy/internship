import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { FORM_INVALID_WARNING } from 'src/libs/@shared/consts/popup.consts';
import { PopupComponent } from 'src/libs/@modules/popup/container/popup.component';
import { PRIVILEGE_OPTIONS } from '../../../../shared/consts/privileges.const';
import { IAdminGroup } from '../../../../shared/models/admin-group.model';
import { CLEAR_SELECTED_ADMIN_GROUP_ACTION } from '../../../../shared/stores/admin-store/admin.actions';

@Component({
  selector: 'app-admin-edit-form',
  templateUrl: './admin-edit-form.component.html',
  styleUrls: ['./admin-edit-form.component.scss'],
})
export class AdminEditFormComponent implements OnInit, OnDestroy {
  @Input()
  adminGroup: IAdminGroup;

  @Output()
  onFormSubmit: EventEmitter<IAdminGroup> = new EventEmitter<IAdminGroup>();

  adminGroupEditForm = this.fb.group({
    userGroup: this.fb.group({
      name: ['', Validators.required],
    }),
    privileges: this.fb.group({
      options: this.fb.array([]),
    }),
  });

  get privilegeOptionsArray() {
    return this.adminGroupEditForm.get('privileges.options') as FormArray;
  }

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.patchValueToForm();
  }

  ngOnDestroy(): void {
    this.store.dispatch(CLEAR_SELECTED_ADMIN_GROUP_ACTION());
  }

  onPrivilegeEditFormSubmit(): void {
    if (this.adminGroupEditForm.valid) {
      this.onFormSubmit.emit({
        ...this.adminGroup,
        privileges: this.privilegeOptionsArray.value
          .map((isChecked: boolean, i: number) =>
            isChecked ? PRIVILEGE_OPTIONS[i].value : null
          )
          .filter(Boolean),
      });
    } else {
      this.dialog.open(PopupComponent, {
        data: FORM_INVALID_WARNING,
      });
    }
  }

  private patchValueToForm(): void {
    this.adminGroupEditForm.patchValue({
      userGroup: {
        name: this.adminGroup.name,
      },
    });
    PRIVILEGE_OPTIONS.forEach((option) => {
      this.privilegeOptionsArray.push(
        new FormControl(
          this.adminGroup.privileges
            ? this.adminGroup.privileges.includes(option.value)
            : false
        )
      );
    });
  }
}
