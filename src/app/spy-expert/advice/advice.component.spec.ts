import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Advice } from '../core/models/advice';
import { AdviceComponent } from './advice.component';
import { DebugElement } from '@angular/core';
import { provideRouter } from '@angular/router';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';

describe('AdviceComponent', () => {
  let component: AdviceComponent;
  let fixture: ComponentFixture<AdviceComponent>;
  let debugEl: DebugElement;
  let expectedAdvice: Advice = { slip: { id: 2, advice: 'fake advice' } };
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      providers: [
        provideRouter([]),
        { provide: Router, useValue: routerSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AdviceComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;

    // Use Angular's setInput to set the input value
    fixture.componentRef.setInput('advice', expectedAdvice);
    fixture.detectChanges();

    await fixture.whenStable();
  });

  it('should display the advice', () => {
    const adviceElement = debugEl.query(By.css('p')).nativeElement;
    expect(adviceElement.textContent).toContain(expectedAdvice.slip.advice);
  });

  it('should redirect to the hate page', () => {
    component.hateAdvice();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/hate', expectedAdvice.slip.id]);
  });
});
