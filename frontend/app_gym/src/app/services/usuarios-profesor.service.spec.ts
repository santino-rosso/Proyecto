import { TestBed } from '@angular/core/testing';

import { UsuariosProfesorService } from './usuarios-profesor.service';

describe('UsuariosProfesorService', () => {
  let service: UsuariosProfesorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuariosProfesorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
