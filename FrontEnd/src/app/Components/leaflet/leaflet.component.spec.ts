import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeafletComponent } from './leaflet.component';

describe('LeafletComponent', () => {
  let component: LeafletComponent;
  let fixture: ComponentFixture<LeafletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeafletComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeafletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
