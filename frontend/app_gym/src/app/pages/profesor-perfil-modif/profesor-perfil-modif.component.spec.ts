import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesorPerfilModifComponent } from './profesor-perfil-modif.component';

describe('ProfesorPerfilModifComponent', () => {
  let component: ProfesorPerfilModifComponent;
  let fixture: ComponentFixture<ProfesorPerfilModifComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfesorPerfilModifComponent]
    });
    fixture = TestBed.createComponent(ProfesorPerfilModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
