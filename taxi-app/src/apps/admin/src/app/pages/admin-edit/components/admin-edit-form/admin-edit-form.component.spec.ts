import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { SharedModule } from 'src/libs/@shared/shared.module';
import { IAdminGroup } from '../../../../shared/models/admin-group.model';

import { AdminEditFormComponent } from './admin-edit-form.component';

describe('AdminEditFormComponent', () => {
  let component: AdminEditFormComponent;
  let fixture: ComponentFixture<AdminEditFormComponent>;
  let group: IAdminGroup;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminEditFormComponent],
      imports: [SharedModule],
      providers: [FormBuilder],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditFormComponent);
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
