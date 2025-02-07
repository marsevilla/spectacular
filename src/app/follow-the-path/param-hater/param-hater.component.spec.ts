import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { ParamHaterComponent } from './param-hater.component';

describe('ParamHaterComponent', () => {
  let component: ParamHaterComponent;
  let fixture: ComponentFixture<ParamHaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([]), ParamHaterComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { params: { id: '123' } }
          }
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamHaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display advice id', () => {
    expect(component.id).toBe(123);
  });
});
