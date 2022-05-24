import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElogeComponent } from './eloge.component';

describe('ElogeComponent', () => {
  let component: ElogeComponent;
  let fixture: ComponentFixture<ElogeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElogeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElogeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
