import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PRIVILEGE_OPTIONS } from '../../../../shared/consts/privileges.const';
import { SearchPrivilegeService } from '../../../../shared/services/search-privilege.service';

@Component({
  selector: 'app-edit-privileges',
  templateUrl: './edit-privileges.component.html',
  styleUrls: ['./edit-privileges.component.scss'],
})
export class EditPrivilegesComponent {
  @Input()
  parentGroup: FormGroup;

  privilegeOptions = PRIVILEGE_OPTIONS;

  constructor(public searchPrivilegeService: SearchPrivilegeService) {}
}
