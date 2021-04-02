import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentajpmsUiComponent } from './cuentajpms-ui.component';

describe('CuentajpmsUiComponent', () => {
  let component: CuentajpmsUiComponent;
  let fixture: ComponentFixture<CuentajpmsUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentajpmsUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentajpmsUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
