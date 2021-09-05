import {Login4Component, AuthService} from './login4.component';
import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('Component: Login', () => {

  let component: Login4Component;
  let fixture: ComponentFixture<Login4Component>;
  let authService: AuthService;
  let el: DebugElement;

  beforeEach(() => {

    // refine the test module by declaring the test component
    TestBed.configureTestingModule({
      declarations: [Login4Component],
      providers: [AuthService]
    });

    // create component and test fixture
    fixture = TestBed.createComponent(Login4Component);

    // get test component from the fixture
    component = fixture.componentInstance;

    // UserService provided to the TestBed
    authService = TestBed.inject(AuthService);

    //  get the "a" element by CSS selector (e.g., by class name)
    el = fixture.debugElement.query(By.css('a'));
  });

  it('Test without regard to asynchrony', () => {
    fixture.detectChanges();
    expect(el.nativeElement.textContent.trim()).toBe('Login');
    spyOn(authService, 'isAuthenticated').and.returnValue(Promise.resolve(true));
    component.ngOnInit();
    fixture.detectChanges();
    expect(el.nativeElement.textContent.trim()).toBe('Logout');
  });

  it('Button label via fakeAsync() and tick()', fakeAsync(() => {
    expect(el.nativeElement.textContent.trim()).toBe('');
    fixture.detectChanges();
    expect(el.nativeElement.textContent.trim()).toBe('Login');

    spyOn(authService, 'isAuthenticated').and.returnValue(Promise.resolve(true));

    component.ngOnInit();
    // Simulates the passage of time until all pending asynchronous activities complete
    tick();
    fixture.detectChanges();
    expect(el.nativeElement.textContent.trim()).toBe('Logout');
  }));

  it('Button label via async() and whenStable()', () => {
    // async() knows about all the pending promises defined in it's function body.
    fixture.detectChanges();
    expect(el.nativeElement.textContent.trim()).toBe('Login');
    spyOn(authService, 'isAuthenticated').and.returnValue(Promise.resolve(true));

    fixture.whenStable().then(() => {
      // This is called when ALL pending promises have been resolved
      fixture.detectChanges();
      expect(el.nativeElement.textContent.trim()).toBe('Logout');
    });

    component.ngOnInit();

  });

  it('Button label via jasmine.done', (done) => {
    fixture.detectChanges();
    expect(el.nativeElement.textContent.trim()).toBe('Login');

    // Make the authService return a promise that resolves to true
    let spy = spyOn(authService, 'isAuthenticated').and.returnValue(Promise.resolve(true));
    // We trigger the component to check the authService again
    component.ngOnInit();

    // We now want to call a function when the Promise returned from authService.isAuthenticated() is resolved
    spy.calls.mostRecent().returnValue.then(() => {
      // The needsChanged boolean has been updated on the Component so to update the template we trigger change detection
      fixture.detectChanges();
      // Now the label is Logout
      expect(el.nativeElement.textContent.trim()).toBe('Logout');
      // We tell jasmine we are done with this test spec
      done();
    });
  });
});
