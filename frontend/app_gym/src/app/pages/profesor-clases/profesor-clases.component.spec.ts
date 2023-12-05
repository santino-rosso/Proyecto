import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfesorClasesComponent } from './profesor-clases.component';

describe('ProfesorClasesComponent', () => {
  let component: ProfesorClasesComponent;
  let fixture: ComponentFixture<ProfesorClasesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfesorClasesComponent]
    });
    fixture = TestBed.createComponent(ProfesorClasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
