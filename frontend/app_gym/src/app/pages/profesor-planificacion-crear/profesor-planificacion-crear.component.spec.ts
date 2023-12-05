import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesorPlanificacionCrearComponent } from './profesor-planificacion-crear.component';

describe('ProfesorPlanificacionCrearComponent', () => {
  let component: ProfesorPlanificacionCrearComponent;
  let fixture: ComponentFixture<ProfesorPlanificacionCrearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfesorPlanificacionCrearComponent]
    });
    fixture = TestBed.createComponent(ProfesorPlanificacionCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
