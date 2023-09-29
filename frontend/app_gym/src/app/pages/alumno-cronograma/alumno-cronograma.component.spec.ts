import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoCronogramaComponent } from './alumno-cronograma.component';

describe('AlumnoCronogramaComponent', () => {
  let component: AlumnoCronogramaComponent;
  let fixture: ComponentFixture<AlumnoCronogramaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlumnoCronogramaComponent]
    });
    fixture = TestBed.createComponent(AlumnoCronogramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
