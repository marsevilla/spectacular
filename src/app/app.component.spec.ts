import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let app: AppComponent;

    beforeEach(async () => {
      app = new AppComponent();
    });

    it('should create the app', () => {
      expect(app).toBeTruthy();
    });

    it(`should have the 'Spec-tacular!' title`, () => {
      expect(app.title).toEqual('Spec-tacular!');
    });

    it('should render title', () => {
      const compiled = document.createElement('div');
      compiled.innerHTML = `<h1>${app.title}</h1>`;
      expect(compiled.querySelector('h1')?.textContent).toContain('Spec-tacular!');
    });
});
