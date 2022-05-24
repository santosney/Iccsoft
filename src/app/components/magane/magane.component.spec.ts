import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaganeComponent } from './magane.component';

describe('MaganeComponent', () => {
  let component: MaganeComponent;
  let fixture: ComponentFixture<MaganeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaganeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaganeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
