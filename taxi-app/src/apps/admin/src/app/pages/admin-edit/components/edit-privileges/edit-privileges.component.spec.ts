import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { SearchPipe } from '../../../../shared/pipes/search.pipe';
import { AdminEditModule } from '../../admin-edit.module';

import { EditPrivilegesComponent } from './edit-privileges.component';

describe('EditPrivilegesComponent', () => {
  let component: EditPrivilegesComponent;
  let fixture: ComponentFixture<EditPrivilegesComponent>;
  const fb: FormBuilder = new FormBuilder();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditPrivilegesComponent, SearchPipe],
      imports: [AdminEditModule],
      providers: [FormBuilder],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPrivilegesComponent);
    component = fixture.componentInstance;
    component.parentGroup = fb.group({
      options: fb.array([[''], [''], [''], [''], [''], [''], [''], ['']]),
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
