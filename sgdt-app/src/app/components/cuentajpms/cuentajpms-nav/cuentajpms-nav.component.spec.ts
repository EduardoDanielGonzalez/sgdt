import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentajpmsNavComponent } from './cuentajpms-nav.component';

describe('CuentajpmsNavComponent', () => {
  let component: CuentajpmsNavComponent;
  let fixture: ComponentFixture<CuentajpmsNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentajpmsNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentajpmsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
