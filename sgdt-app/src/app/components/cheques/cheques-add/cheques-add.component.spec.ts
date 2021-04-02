import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequesAddComponent } from './cheques-add.component';

describe('ChequesAddComponent', () => {
  let component: ChequesAddComponent;
  let fixture: ComponentFixture<ChequesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChequesAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChequesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
