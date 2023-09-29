import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesorPlanificacionesComponent } from './profesor-planificaciones.component';

describe('ProfesorPlanificacionesComponent', () => {
  let component: ProfesorPlanificacionesComponent;
  let fixture: ComponentFixture<ProfesorPlanificacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfesorPlanificacionesComponent]
    });
    fixture = TestBed.createComponent(ProfesorPlanificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
