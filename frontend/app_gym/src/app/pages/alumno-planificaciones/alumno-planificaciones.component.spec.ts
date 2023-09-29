import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoPlanificacionesComponent } from './alumno-planificaciones.component';

describe('AlumnoPlanificacionesComponent', () => {
  let component: AlumnoPlanificacionesComponent;
  let fixture: ComponentFixture<AlumnoPlanificacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlumnoPlanificacionesComponent]
    });
    fixture = TestBed.createComponent(AlumnoPlanificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
