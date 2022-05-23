import {TestBed } from '@angular/core/testing';
import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';


xdescribe('Hello world', () => {
  xit('says hello', () => {
    expect('Hello world!').toEqual('Hello world!');
  });
});

describe('Hello world ', () => {
  let testSpecCount = 0;
  // fit('should say hello', () => {
  //   expect('hello').toEqual('hello');
  // });

  xit('should say hello again', () => {
    expect('hello').toEqual('hello');
  });

  beforeAll(() => {
    testSpecCount = 0;
    console.log('run beforeAll method');
    testSpecCount++;
  });
  afterAll(() => {
    testSpecCount = 0;
    console.log('run afterAll method');
  });
  beforeEach(() => {
    testSpecCount++;
    console.log('run beforeEach method');
  });
  afterEach(() => {
    console.log('run afterEach method');
  });
});

describe('AppComponent', () => {

  describe(':', () => {

    // Begin by putting re-usable, preparatory code in a setup function instead of beforeEach().
    // The setup() function returns an object literal with the variables, such as app, that a test might reference.
    // You don't define semi-global variables (e.g., let app,fixture ) in the body of the describe().
    // Then each test invokes setup() in its first line, before continuing with steps that
    // manipulate the test subject and assert expectations.

    function setup() {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      return { fixture, app };
    }

    it('should create the app', () => {
      const { app } = setup();
      expect(app).toBeTruthy();
    });

    it('should have title as \'angular-test-learning\'', () => {
      const { app } = setup();
      expect(app.title).toBe('angular-test-learning');
    });

    it('should have h1 tag as \'Welcome angular-test-learning\'', () => {
      const { app, fixture } = setup();
      fixture.detectChanges();
      const compile = fixture.debugElement.nativeElement;
      const h1tag = compile.querySelector('h1');
      // expect(h1tag.textContent).toBe('Welcome to angular-test-learning');
    });
  });

});



describe('AppComponent', () => {
  const routes: Routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full'}
  ];
  beforeEach(async () => {
    // The TestBed is the most important of the Angular testing utilities.
    // The TestBed creates a dynamically-constructed Angular test module that emulates an Angular @NgModule.
    // The TestBed.configureTestingModule() method takes a metadata object that can have most of the properties of an @NgModule.
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      imports: [
        RouterModule.forRoot(routes)
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' }
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-test-learning'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-test-learning');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    expect(compiled.querySelector('.content span').textContent).toContain('angular-test-learning app is running');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to angular-test-learning');
  });



});







