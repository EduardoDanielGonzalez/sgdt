import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequesDelComponent } from './cheques-del.component';

describe('ChequesDelComponent', () => {
  let component: ChequesDelComponent;
  let fixture: ComponentFixture<ChequesDelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChequesDelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChequesDelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
