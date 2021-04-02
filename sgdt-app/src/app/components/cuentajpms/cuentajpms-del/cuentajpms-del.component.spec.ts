import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentajpmsDelComponent } from './cuentajpms-del.component';

describe('CuentajpmsDelComponent', () => {
  let component: CuentajpmsDelComponent;
  let fixture: ComponentFixture<CuentajpmsDelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentajpmsDelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentajpmsDelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
