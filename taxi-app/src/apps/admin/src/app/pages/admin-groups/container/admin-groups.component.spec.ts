import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { SELECT_ADMIN_GROUPS_QUERY_PARAMS } from '../../../shared/stores/admin-store/admin.selector';
import { IAdminState } from '../../../shared/stores/admin-store/admin.state';

import { AdminGroupsComponent } from './admin-groups.component';

describe('AdminGroupsComponent', () => {
  let component: AdminGroupsComponent;
  let fixture: ComponentFixture<AdminGroupsComponent>;
  let store: MockStore<IAdminState>;
  let mockQueryParamsSelector;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminGroupsComponent],
      providers: [provideMockStore()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGroupsComponent);
    component = fixture.componentInstance;

    store = TestBed.inject(MockStore);
    mockQueryParamsSelector = store.overrideSelector(
      SELECT_ADMIN_GROUPS_QUERY_PARAMS,
      {
        filter: null,
        sort: null,
        paginate: null,
      }
    );
    mockQueryParamsSelector.setResult([]);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain child AdminGroupsTableComponent', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-admin-groups-table')).not.toBe(null);
  });
});
