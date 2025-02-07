import { TestBed } from '@angular/core/testing';
import { AdvicesService } from './core/services/advices/advices.service';
import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';

interface Advice {
  id: number;
  advice: string;
}

describe('SpyExpertComponent', () => {
  let adviceService: AdvicesService;
  let httpTesting: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });

    httpTesting = TestBed.inject(HttpTestingController);
    adviceService = TestBed.inject(AdvicesService);
  });

  afterEach(() => {
    httpTesting.verify();
  });

  it('should return expected advice (httpclient called once)', () => {
    const expectedAdvice: Advice = { id: 1, advice: 'Always write clean code.' };

    adviceService.getAdvice(1).subscribe((advice) => {
    expect(advice).toEqual(expectedAdvice as any);
    });

    const req = httpTesting.expectOne('https://api.adviceslip.com/advice');
    expect(req.request.method).toBe('GET');

    req.flush(expectedAdvice);
  });

  it('should properly handle request error', () => {
    const errorMessage = 'Error getting advice.';
    const adviceId = 1;

    adviceService.getAdvice(adviceId).subscribe(
      (advice) => fail('expected to fail'),
      (error) => {
        expect(error).toBe(errorMessage);
      }
    );

    const req = httpTesting.expectOne('https://api.adviceslip.com/advice');
    expect(req.request.method).toBe('GET');
  });
});
