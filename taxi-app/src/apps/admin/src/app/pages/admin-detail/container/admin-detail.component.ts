import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UnsubscribeService } from 'src/libs/@shared/services/unsubscribe.service';
import { IAdminGroup } from '../../../shared/models/admin-group.model';
import {
  CLEAR_SELECTED_ADMIN_GROUP_ACTION,
  LOAD_GROUP_PRIVILEGES_ACTION,
} from '../../../shared/stores/admin-store/admin.actions';
import {
  SELECT_ADMIN_LOADING,
  SELECT_CURRENT_GROUP,
} from '../../../shared/stores/admin-store/admin.selector';
import { IAdminState } from '../../../shared/stores/admin-store/admin.state';

@Component({
  selector: 'app-admin-detail',
  templateUrl: './admin-detail.component.html',
  styleUrls: ['./admin-detail.component.scss'],
})
export class AdminDetailComponent implements OnInit, OnDestroy {
  selectedGroup: IAdminGroup;
  isLoading$: Observable<boolean>;

  constructor(
    private readonly unsubscribeService: UnsubscribeService,
    private activatedRoute: ActivatedRoute,
    private store: Store<IAdminState>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(takeUntil(this.unsubscribeService.subscription))
      .subscribe((routeParams: { id: string }) => {
        this.store.dispatch(
          LOAD_GROUP_PRIVILEGES_ACTION({ adminGroupId: routeParams.id })
        );
        this.store
          .select(SELECT_CURRENT_GROUP)
          .pipe(takeUntil(this.unsubscribeService.subscription))
          .subscribe((currentAdminGroup: IAdminGroup) => {
            this.selectedGroup = currentAdminGroup;
          });
      });

    this.isLoading$ = this.store.select(SELECT_ADMIN_LOADING);
  }

  ngOnDestroy(): void {
    this.store.dispatch(CLEAR_SELECTED_ADMIN_GROUP_ACTION());
    this.unsubscribeService.destroy();
  }

  onClose(): void {
    this.router.navigate(['admin', 'groups', 'list']);
  }
}
