import {LoginComponent} from './login.component';
import {AuthService} from '../../service/auth/auth.service';
import {Component} from '@angular/core';


// describe('Login Component test with real service ', () => {
//
//     let component: LoginComponent;
//     let service: AuthService;
//
//     beforeEach(() => {
//         service = new AuthService();
//         component = new LoginComponent(service);
//     });
//
//     afterEach(() => {
//         localStorage.removeItem('token');
//         service = null;
//         component = null;
//     });
//
//
//     it('canLogin returns false when the user is not authenticated', () => {
//         expect(component.needsLogin()).toBeTruthy();
//     });
//
//     it('canLogin returns false when the user is not authenticated', () => {
//         localStorage.setItem('token', '12345');
//         expect(component.needsLogin()).toBeFalsy();
//     });
// });






// class MockAuthService {
//   authenticated = false;
//
//   isAuthenticated() {
//     return this.authenticated;
//   }
// }
//
// describe('Component: Login', () => {
//
//   let component: LoginComponent;
//   let service: MockAuthService;
//
//   beforeEach(() => {
//     service = new MockAuthService();
//     component = new LoginComponent(service);
//   });
//
//   afterEach(() => {
//     service = null;
//     component = null;
//   });
//
//
//   it('canLogin returns false when the user is not authenticated', () => {
//     service.authenticated = false;
//     expect(component.needsLogin()).toBeTruthy();
//   });
//
//   it('canLogin returns false when the user is not authenticated', () => {
//     service.authenticated = true;
//     expect(component.needsLogin()).toBeFalsy();
//   });
// });







// class MockAuthService extends AuthService {
//   authenticated = false;
//
//   isAuthenticated() {
//     return this.authenticated;
//   }
// }





// describe('Component: Login', () => {
//
//   let component: LoginComponent;
//   let service: AuthService;
//   let spy: any;
//
//   beforeEach(() => {
//     service = new AuthService();
//     component = new LoginComponent(service);
//   });
//
//   afterEach(() => {
//     service = null;
//     component = null;
//   });
//
//
//   it('canLogin returns false when the user is not authenticated', () => {
//     spy = spyOn(service, 'isAuthenticated').and.returnValue(false);
//     expect(component.needsLogin()).toBeTruthy();
//     expect(service.isAuthenticated).toHaveBeenCalled();
//
//   });
//
//   it('canLogin returns false when the user is not authenticated', () => {
//     spy = spyOn(service, 'isAuthenticated').and.returnValue(true);
//     expect(component.needsLogin()).toBeFalsy();
//     expect(service.isAuthenticated).toHaveBeenCalled();
//   });
// });
