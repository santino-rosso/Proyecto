import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesorPlanificacionParticularEditarComponent } from './profesor-planificacion-particular-editar.component';

describe('ProfesorPlanificacionParticularEditarComponent', () => {
  let component: ProfesorPlanificacionParticularEditarComponent;
  let fixture: ComponentFixture<ProfesorPlanificacionParticularEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfesorPlanificacionParticularEditarComponent]
    });
    fixture = TestBed.createComponent(ProfesorPlanificacionParticularEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
