import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlumnoClases } from './alumno-clases.component';

describe('AlumnoClases', () => {
  let component: AlumnoClases;
  let fixture: ComponentFixture<AlumnoClases>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlumnoClases]
    });
    fixture = TestBed.createComponent(AlumnoClases);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
