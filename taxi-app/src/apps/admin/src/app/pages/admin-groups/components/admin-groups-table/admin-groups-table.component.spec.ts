import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import {
  SELECT_ADMIN_GROUPS,
  SELECT_ADMIN_GROUPS_LENGTH,
  SELECT_ADMIN_LOADING,
} from '../../../../shared/stores/admin-store/admin.selector';
import { IAdminState } from '../../../../shared/stores/admin-store/admin.state';

import { AdminGroupsTableComponent } from './admin-groups-table.component';

let component: AdminGroupsTableComponent;
let fixture: ComponentFixture<AdminGroupsTableComponent>;
let table: Table;
let store: MockStore<IAdminState>;
let mockAdminGroupsSelector;
let mockAdminGroupsLengthSelector;
let mockAdminLoadingSelector;

describe('AdminGroupsTableComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminGroupsTableComponent],
      providers: [provideMockStore()],
    })
      .compileComponents()
      .then(createComponent);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a table', () => {
    expect(table.count.length).toBeGreaterThan(0);
  });

  it('should render loading spinner when the store loading state is true', () => {
    mockAdminLoadingSelector.setResult(true);
    store.refreshState();
    fixture.detectChanges();

    expect(
      fixture.debugElement.queryAll(By.css('.admin-groups__loading')).length
    ).toBe(1);
  });

  it('should update the UI when the store loading state changes', () => {
    mockAdminLoadingSelector.setResult(false);
    store.refreshState();
    fixture.detectChanges();

    expect(
      fixture.debugElement.queryAll(By.css('.admin-groups__loading')).length
    ).toBe(0);
  });
});

function createComponent() {
  fixture = TestBed.createComponent(AdminGroupsTableComponent);
  component = fixture.componentInstance;

  store = TestBed.inject(MockStore);

  mockAdminGroupsSelector = store.overrideSelector(SELECT_ADMIN_GROUPS, [
    {
      id: '0',
      id_number: 111,
      name: 'new_name',
      privileges: [],
    },
  ]);
  mockAdminGroupsSelector.setResult([]);

  mockAdminGroupsLengthSelector = store.overrideSelector(
    SELECT_ADMIN_GROUPS_LENGTH,
    0
  );
  mockAdminGroupsSelector.setResult(0);

  mockAdminLoadingSelector = store.overrideSelector(
    SELECT_ADMIN_LOADING,
    false
  );
  mockAdminGroupsSelector.setResult(false);

  return fixture.whenStable().then(() => {
    fixture.detectChanges();
    spyOn(store, 'dispatch').and.callFake(() => {});
    table = new Table();
  });
}

class Table {
  count: HTMLTableElement[];

  constructor() {
    const tableNodes = fixture.nativeElement.querySelectorAll('table ');
    this.count = Array.from(tableNodes);
  }
}
