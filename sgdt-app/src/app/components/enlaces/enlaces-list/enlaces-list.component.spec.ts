import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnlacesListComponent } from './enlaces-list.component';

describe('EnlacesListComponent', () => {
  let component: EnlacesListComponent;
  let fixture: ComponentFixture<EnlacesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnlacesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnlacesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
