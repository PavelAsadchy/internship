import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IAdminGroup } from '../../../../shared/models/admin-group.model';

import { AdminGroupsTableBtnsComponent } from './admin-groups-table-btns.component';

describe('AdminGroupsTableBtnsComponent', () => {
  let component: AdminGroupsTableBtnsComponent;
  let fixture: ComponentFixture<AdminGroupsTableBtnsComponent>;
  let group: IAdminGroup;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminGroupsTableBtnsComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGroupsTableBtnsComponent);
    group = {
      id: '0',
      id_number: 111,
      name: 'new_name',
      privileges: [],
    };
    component = fixture.componentInstance;
    component.element = group;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
