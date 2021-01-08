import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';
import { PRIVILEGE_OPTIONS } from '../../../../shared/consts/privileges.const';

@Component({
  selector: 'app-admin-edit-form',
  templateUrl: './admin-edit-form.component.html',
  styleUrls: ['./admin-edit-form.component.scss'],
})
export class AdminEditFormComponent implements OnInit {
  privilegeOptions = PRIVILEGE_OPTIONS;

  privilegeEditForm = this.fb.group({
    privilegeOptions: this.fb.array([]),
  });

  get privilegeOptionsArray() {
    return this.privilegeEditForm.get('privilegeOptions') as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    PRIVILEGE_OPTIONS.forEach((option) => {
      this.privilegeOptionsArray.push(new FormControl(false));
    });
  }

  onPrivilegeEditFormSubmit(): void {}
}
