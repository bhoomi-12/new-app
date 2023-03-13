import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrpgComponent } from './qrpg.component';

describe('QrpgComponent', () => {
  let component: QrpgComponent;
  let fixture: ComponentFixture<QrpgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrpgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QrpgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
