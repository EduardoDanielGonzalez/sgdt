import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequesNavComponent } from './cheques-nav.component';

describe('ChequesNavComponent', () => {
  let component: ChequesNavComponent;
  let fixture: ComponentFixture<ChequesNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChequesNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChequesNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
