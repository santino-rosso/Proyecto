import { TestBed } from '@angular/core/testing';

import { PlanificacionesService } from './planificaciones.service';

describe('PlanificacionesService', () => {
  let service: PlanificacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanificacionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
