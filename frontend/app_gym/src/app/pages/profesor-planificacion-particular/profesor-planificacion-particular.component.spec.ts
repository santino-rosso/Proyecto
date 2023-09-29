import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesorPlanificacionParticularComponent } from './profesor-planificacion-particular.component';

describe('ProfesorPlanificacionParticularComponent', () => {
  let component: ProfesorPlanificacionParticularComponent;
  let fixture: ComponentFixture<ProfesorPlanificacionParticularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfesorPlanificacionParticularComponent]
    });
    fixture = TestBed.createComponent(ProfesorPlanificacionParticularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
