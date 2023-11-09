import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerCronogramaComponent } from './ver-cronograma.component';

describe('VerCronogramaComponent', () => {
  let component: VerCronogramaComponent;
  let fixture: ComponentFixture<VerCronogramaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerCronogramaComponent]
    });
    fixture = TestBed.createComponent(VerCronogramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
