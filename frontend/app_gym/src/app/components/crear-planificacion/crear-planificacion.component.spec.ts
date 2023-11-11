import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPlanificacionComponent } from './crear-planificacion.component';

describe('CrearPlanificacionComponent', () => {
  let component: CrearPlanificacionComponent;
  let fixture: ComponentFixture<CrearPlanificacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearPlanificacionComponent]
    });
    fixture = TestBed.createComponent(CrearPlanificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
