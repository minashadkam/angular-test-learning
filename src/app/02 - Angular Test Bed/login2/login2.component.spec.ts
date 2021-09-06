import { TestBed, ComponentFixture } from '@angular/core/testing';
import {Login2Component} from './login2.component';
import {AuthService} from '../../service/auth/auth.service';

describe('Component: Login', () => {

    let component: Login2Component;
    let fixture: ComponentFixture<Login2Component>;
    let authService: AuthService;

    beforeEach(() => {

        // refine the test module by declaring the test component
        TestBed.configureTestingModule({
            declarations: [Login2Component],
            providers: [AuthService]
        });

        // create component and test fixture
        fixture = TestBed.createComponent(Login2Component);

        // get test component from the fixture
        component = fixture.componentInstance;

        // UserService provided to the TestBed
        authService = TestBed.inject(AuthService);

    });



    it('canLogin returns false when the user is not authenticated', () => {
        spyOn(authService, 'isAuthenticated').and.returnValue(false);
        expect(component.needsLogin()).toBeTruthy();
        expect(authService.isAuthenticated).toHaveBeenCalled();
    });

    it('canLogin returns false when the user is not authenticated', () => {
        spyOn(authService, 'isAuthenticated').and.returnValue(true);
        expect(component.needsLogin()).toBeFalsy();
        expect(authService.isAuthenticated).toHaveBeenCalled();
    });
});
