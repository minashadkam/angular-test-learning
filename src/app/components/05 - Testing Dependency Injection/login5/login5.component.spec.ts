import {TestBed, ComponentFixture, inject} from '@angular/core/testing';
import {Login5Component} from './login5.component';
import {AuthService} from '../../../service/auth/auth.service';

class MockAuthService extends AuthService {
  // tslint:disable-next-line:typedef
  isAuthenticated() {
    return true;
  }
}


describe('Component: Login', () => {

  let component: Login5Component;
  let fixture: ComponentFixture<Login5Component>;
  let testBedService: AuthService;
  let componentService: AuthService;

  beforeEach(() => {

    // refine the test module by declaring the test component
    TestBed.configureTestingModule({
      declarations: [Login5Component],
      providers: [AuthService]
    });

    // Configure the component with another set of Providers
    TestBed.overrideComponent(
      Login5Component,
      {set: {providers: [{provide: AuthService, useClass: MockAuthService}]}}
    );

    // create component and test fixture
    fixture = TestBed.createComponent(Login5Component);

    // get test component from the fixture
    component = fixture.componentInstance;

    // AuthService provided to the TestBed
    // testBedService = TestBed.get(AuthService); //deprecated
    testBedService = TestBed.inject(AuthService);

    // AuthService provided by Component, (should return MockAuthService)
    componentService = fixture.debugElement.injector.get(AuthService);
  });

  it('Service injected via inject(...) and TestBed.get(...) should be the same instance',
    inject([AuthService], (injectService: AuthService) => {
      expect(injectService).toBe(testBedService);
    })
  );

  it('Service injected via component should be and instance of MockAuthService', () => {
    expect(componentService instanceof MockAuthService).toBeTruthy();
  });
});
