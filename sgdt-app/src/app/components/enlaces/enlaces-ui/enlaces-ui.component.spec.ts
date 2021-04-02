import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnlacesUiComponent } from './enlaces-ui.component';

describe('EnlacesUiComponent', () => {
  let component: EnlacesUiComponent;
  let fixture: ComponentFixture<EnlacesUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnlacesUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnlacesUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
