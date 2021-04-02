import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentajpmsEditComponent } from './cuentajpms-edit.component';

describe('CuentajpmsEditComponent', () => {
  let component: CuentajpmsEditComponent;
  let fixture: ComponentFixture<CuentajpmsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentajpmsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentajpmsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
