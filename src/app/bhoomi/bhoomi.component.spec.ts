import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BhoomiComponent } from './bhoomi.component';

describe('BhoomiComponent', () => {
  let component: BhoomiComponent;
  let fixture: ComponentFixture<BhoomiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BhoomiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BhoomiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
