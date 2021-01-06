import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGroupsTableBtnsComponent } from './admin-groups-table-btns.component';

describe('AdminGroupsTableBtnsComponent', () => {
  let component: AdminGroupsTableBtnsComponent;
  let fixture: ComponentFixture<AdminGroupsTableBtnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGroupsTableBtnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGroupsTableBtnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
