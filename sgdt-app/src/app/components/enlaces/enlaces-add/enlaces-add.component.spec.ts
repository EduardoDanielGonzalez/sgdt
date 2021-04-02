import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnlacesAddComponent } from './enlaces-add.component';

describe('EnlacesAddComponent', () => {
  let component: EnlacesAddComponent;
  let fixture: ComponentFixture<EnlacesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnlacesAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnlacesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
