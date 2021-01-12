import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { SearchPrivilegeService } from '../../../../shared/services/search-privilege.service';

@Component({
  selector: 'app-privileges-search',
  templateUrl: './privileges-search.component.html',
  styleUrls: ['./privileges-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivilegesSearchComponent implements OnDestroy {
  constructor(public searchPrivilegeService: SearchPrivilegeService) {}

  ngOnDestroy(): void {
    this.searchPrivilegeService.privilegeSearched = '';
  }
}
