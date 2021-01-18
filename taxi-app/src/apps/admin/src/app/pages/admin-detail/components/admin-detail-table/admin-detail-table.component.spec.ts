import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IAdminGroup } from '../../../../shared/models/admin-group.model';

import { AdminDetailTableComponent } from './admin-detail-table.component';

describe('AdminDetailTableComponent', () => {
  let component: AdminDetailTableComponent;
  let fixture: ComponentFixture<AdminDetailTableComponent>;
  let group: IAdminGroup;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminDetailTableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDetailTableComponent);
    group = {
      id: '0',
      id_number: 111,
      name: 'new_name',
      privileges: [],
    };
    component = fixture.componentInstance;
    component.adminGroup = group;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
