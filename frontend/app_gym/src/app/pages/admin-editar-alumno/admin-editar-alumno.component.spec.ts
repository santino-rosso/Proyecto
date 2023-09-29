import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditarAlumnoComponent } from './admin-editar-alumno.component';

describe('AdminEditarAlumnoComponent', () => {
  let component: AdminEditarAlumnoComponent;
  let fixture: ComponentFixture<AdminEditarAlumnoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminEditarAlumnoComponent]
    });
    fixture = TestBed.createComponent(AdminEditarAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
