import { Component } from '@angular/core';
import { SearchPrivilegeService } from '../../../../shared/services/search-privilege.service';

@Component({
  selector: 'app-privileges-search',
  templateUrl: './privileges-search.component.html',
  styleUrls: ['./privileges-search.component.scss'],
})
export class PrivilegesSearchComponent {
  constructor(public searchPrivilegeService: SearchPrivilegeService) {}
}
