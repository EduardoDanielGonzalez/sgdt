import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnlacesDelComponent } from './enlaces-del.component';

describe('EnlacesDelComponent', () => {
  let component: EnlacesDelComponent;
  let fixture: ComponentFixture<EnlacesDelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnlacesDelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnlacesDelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
