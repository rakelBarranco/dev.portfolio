import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedCanvas } from './animated-canvas';

describe('AnimatedCanvas', () => {
  let component: AnimatedCanvas;
  let fixture: ComponentFixture<AnimatedCanvas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimatedCanvas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimatedCanvas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
