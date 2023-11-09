import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPlanificacionComponent } from './ver-planificacion.component';

describe('VerPlanificacionComponent', () => {
  let component: VerPlanificacionComponent;
  let fixture: ComponentFixture<VerPlanificacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerPlanificacionComponent]
    });
    fixture = TestBed.createComponent(VerPlanificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
