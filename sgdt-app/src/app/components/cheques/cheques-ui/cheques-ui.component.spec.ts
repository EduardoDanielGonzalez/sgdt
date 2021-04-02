import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequesUiComponent } from './cheques-ui.component';

describe('ChequesUiComponent', () => {
  let component: ChequesUiComponent;
  let fixture: ComponentFixture<ChequesUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChequesUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChequesUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
