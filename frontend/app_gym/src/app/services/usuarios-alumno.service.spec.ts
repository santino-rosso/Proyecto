import { TestBed } from '@angular/core/testing';

import { UsuariosAlumnoService } from './usuarios-alumno.service';

describe('UsuariosAlumnoService', () => {
  let service: UsuariosAlumnoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuariosAlumnoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
