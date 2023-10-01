import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavAlumnoComponent } from './nav-alumno.component';

describe('NavAlumnoComponent', () => {
  let component: NavAlumnoComponent;
  let fixture: ComponentFixture<NavAlumnoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavAlumnoComponent]
    });
    fixture = TestBed.createComponent(NavAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
