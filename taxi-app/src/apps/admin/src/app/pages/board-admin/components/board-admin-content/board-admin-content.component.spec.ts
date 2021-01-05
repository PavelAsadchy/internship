import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardAdminContentComponent } from './board-admin-content.component';

describe('BoardAdminContentComponent', () => {
  let component: BoardAdminContentComponent;
  let fixture: ComponentFixture<BoardAdminContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardAdminContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardAdminContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
