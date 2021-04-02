import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequesEditComponent } from './cheques-edit.component';

describe('ChequesEditComponent', () => {
  let component: ChequesEditComponent;
  let fixture: ComponentFixture<ChequesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChequesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChequesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
