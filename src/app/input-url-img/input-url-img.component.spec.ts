import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputUrlImgComponent } from './input-url-img.component';

describe('InputUrlImgComponent', () => {
  let component: InputUrlImgComponent;
  let fixture: ComponentFixture<InputUrlImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputUrlImgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputUrlImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
