import { ComponentFixture, TestBed } from '@angular/core/testing';
import {BannerExternalComponent} from './banner-external.component';


describe('BannerExternalComponent (external files)', () => {
  let component: BannerExternalComponent;
  let fixture: ComponentFixture<BannerExternalComponent>;
  let h1: HTMLElement;

  describe('setup that may fail', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ BannerExternalComponent ],
      }); // missing call to compileComponents()
      fixture = TestBed.createComponent(BannerExternalComponent);
    });

    it('should create', () => {
      expect(fixture.componentInstance).toBeDefined();
    });
  });

  describe('Two beforeEach', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ BannerExternalComponent ],
      }).compileComponents();  // compile template and css
    });

    // synchronous beforeEach
    beforeEach(() => {
      fixture = TestBed.createComponent(BannerExternalComponent);
      component = fixture.componentInstance;  // BannerExternalComponent test instance
      h1 = fixture.nativeElement.querySelector('h1');
    });

    tests();
  });

  describe('One beforeEach', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ BannerExternalComponent ],
      }).compileComponents();
      fixture = TestBed.createComponent(BannerExternalComponent);
      component = fixture.componentInstance;
      h1 = fixture.nativeElement.querySelector('h1');
    });

    tests();
  });

  function tests() {
    it('no title in the DOM until manually call `detectChanges`', () => {
      expect(h1.textContent).toEqual('');
    });

    it('should display original title', () => {
      fixture.detectChanges();
      expect(h1.textContent).toContain(component.title);
    });

    it('should display a different test title', () => {
      component.title = 'Test Title';
      fixture.detectChanges();
      expect(h1.textContent).toContain('Test Title');
    });
  }
});
