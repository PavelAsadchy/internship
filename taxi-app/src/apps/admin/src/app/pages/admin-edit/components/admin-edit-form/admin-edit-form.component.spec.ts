import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditFormComponent } from './admin-edit-form.component';

describe('AdminEditFormComponent', () => {
  let component: AdminEditFormComponent;
  let fixture: ComponentFixture<AdminEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEditFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
