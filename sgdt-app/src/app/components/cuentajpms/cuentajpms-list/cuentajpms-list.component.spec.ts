import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentajpmsListComponent } from './cuentajpms-list.component';

describe('CuentajpmsListComponent', () => {
  let component: CuentajpmsListComponent;
  let fixture: ComponentFixture<CuentajpmsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentajpmsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentajpmsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
