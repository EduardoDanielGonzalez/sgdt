import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnlacesEditComponent } from './enlaces-edit.component';

describe('EnlacesEditComponent', () => {
  let component: EnlacesEditComponent;
  let fixture: ComponentFixture<EnlacesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnlacesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnlacesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
