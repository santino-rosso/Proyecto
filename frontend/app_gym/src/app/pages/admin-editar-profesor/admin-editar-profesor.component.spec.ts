import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditarProfesorComponent } from './admin-editar-profesor.component';

describe('AdminEditarProfesorComponent', () => {
  let component: AdminEditarProfesorComponent;
  let fixture: ComponentFixture<AdminEditarProfesorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminEditarProfesorComponent]
    });
    fixture = TestBed.createComponent(AdminEditarProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
