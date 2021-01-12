import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDetailTableComponent } from './admin-detail-table.component';

describe('AdminDetailTableComponent', () => {
  let component: AdminDetailTableComponent;
  let fixture: ComponentFixture<AdminDetailTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDetailTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDetailTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
