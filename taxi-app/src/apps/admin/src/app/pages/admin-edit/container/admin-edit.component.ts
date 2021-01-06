import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';
import { PRIVILEGE_OPTIONS } from '../../../shared/consts/privileges.const';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.scss'],
})
export class AdminEditComponent implements OnInit {
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
