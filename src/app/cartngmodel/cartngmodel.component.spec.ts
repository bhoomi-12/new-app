import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartngmodelComponent } from './cartngmodel.component';

describe('CartngmodelComponent', () => {
  let component: CartngmodelComponent;
  let fixture: ComponentFixture<CartngmodelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartngmodelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartngmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
