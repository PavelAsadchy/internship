import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { UnsubscribeService } from 'src/libs/@shared/services/unsubscribe.service';
import { SearchPrivilegeService } from '../../../../shared/services/search-privilege.service';

@Component({
  selector: 'app-privileges-search',
  templateUrl: './privileges-search.component.html',
  styleUrls: ['./privileges-search.component.scss'],
})
export class PrivilegesSearchComponent implements OnInit, OnDestroy {
  privilegesSearch = this.fb.group({
    searchInput: [''],
  });

  constructor(
    public searchPrivilegeService: SearchPrivilegeService,
    private fb: FormBuilder,
    private readonly unsubscribeService: UnsubscribeService
  ) {}

  ngOnInit(): void {
    this.privilegesSearch.controls['searchInput'].valueChanges
      .pipe(
        distinctUntilChanged(),
        takeUntil(this.unsubscribeService.subscription)
      )
      .subscribe((searchReq: string) => {
        this.searchPrivilegeService.privilegeSearched = searchReq;
      });
  }

  ngOnDestroy(): void {
    this.clearInput();
    this.unsubscribeService.destroy();
  }

  clearInput(): void {
    this.privilegesSearch.controls['searchInput'].setValue('');
  }
}
