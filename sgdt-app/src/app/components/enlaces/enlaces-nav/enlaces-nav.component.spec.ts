import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnlacesNavComponent } from './enlaces-nav.component';

describe('EnlacesNavComponent', () => {
  let component: EnlacesNavComponent;
  let fixture: ComponentFixture<EnlacesNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnlacesNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnlacesNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
