import {AppRoute} from './router';
import {Router} from '@angular/router';
import {fakeAsync, TestBed, tick} from '@angular/core/testing';
import {RouterTestingModule, SpyNgModuleFactoryLoader} from '@angular/router/testing';
import { Location } from "@angular/common";
import {Component, NgModule} from '@angular/core';



@Component({template: ''})
class LazyLoadedComponent {
}

@NgModule({declarations: [LazyLoadedComponent]})
class LazyModule {
}


describe("Router: App", () => {

  let location: Location;
  let router: Router;
  let loader: SpyNgModuleFactoryLoader;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(AppRoute)],
      providers: [SpyNgModuleFactoryLoader]
    });

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    loader = TestBed.inject(SpyNgModuleFactoryLoader);
    router.initialNavigation();
  });


  it('navigate to "" redirects you to /home', fakeAsync(() => {
    router.navigate(['']);
    tick();
    expect(location.path()).toBe('/home');
  }));


  it('Should be able to navigate to CarComponent', done => {
    loader.stubbedModules = {SearchModule: LazyModule};
    router.navigate(['search']).then(() => {
      expect(location.path()).toBe('/search');
      done();
    }).catch(e => done.fail(e));
  });
});
