import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentajpmsAddComponent } from './cuentajpms-add.component';

describe('CuentajpmsAddComponent', () => {
  let component: CuentajpmsAddComponent;
  let fixture: ComponentFixture<CuentajpmsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentajpmsAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentajpmsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
