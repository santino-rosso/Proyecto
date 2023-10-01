import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavRegisAdminComponent } from './nav-regis-admin.component';

describe('NavRegisAdminComponent', () => {
  let component: NavRegisAdminComponent;
  let fixture: ComponentFixture<NavRegisAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavRegisAdminComponent]
    });
    fixture = TestBed.createComponent(NavRegisAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
