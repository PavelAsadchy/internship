import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGroupsTableComponent } from './admin-groups-table.component';

describe('AdminGroupsTableComponent', () => {
  let component: AdminGroupsTableComponent;
  let fixture: ComponentFixture<AdminGroupsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGroupsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGroupsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
