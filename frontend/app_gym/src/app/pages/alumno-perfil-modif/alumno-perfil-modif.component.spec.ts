import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoPerfilModifComponent } from './alumno-perfil-modif.component';

describe('AlumnoPerfilModifComponent', () => {
  let component: AlumnoPerfilModifComponent;
  let fixture: ComponentFixture<AlumnoPerfilModifComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlumnoPerfilModifComponent]
    });
    fixture = TestBed.createComponent(AlumnoPerfilModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
