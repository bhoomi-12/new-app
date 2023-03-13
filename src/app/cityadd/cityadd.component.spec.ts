import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityaddComponent } from './cityadd.component';

describe('CityaddComponent', () => {
  let component: CityaddComponent;
  let fixture: ComponentFixture<CityaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityaddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
