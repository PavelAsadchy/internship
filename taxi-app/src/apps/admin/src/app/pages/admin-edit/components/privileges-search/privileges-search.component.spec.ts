import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivilegesSearchComponent } from './privileges-search.component';

describe('PrivilegesSearchComponent', () => {
  let component: PrivilegesSearchComponent;
  let fixture: ComponentFixture<PrivilegesSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivilegesSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivilegesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
