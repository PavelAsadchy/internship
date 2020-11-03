import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardDriverComponent } from './board-driver.component';

describe('BoardDriverComponent', () => {
  let component: BoardDriverComponent;
  let fixture: ComponentFixture<BoardDriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardDriverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
