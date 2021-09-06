import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeComponent } from './employee.component';
import {EmployeeService} from './employee/employee.service';
import {EmployeeServiceMock} from './employee/employee.service.mock';



describe('EmployeeComponent', () => {
    let comp: EmployeeComponent;
    let fixture: ComponentFixture<EmployeeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                EmployeeComponent
            ],
            providers: [
                { provide: EmployeeService, useClass: EmployeeServiceMock }
            ]
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(EmployeeComponent);
            comp = fixture.componentInstance; // UserComponent test instance
        });
    }));

    it(`should have one user`, async(() => {
        expect(comp.employee.length).toEqual(1);
    }));

    it(`html should render one user`, async(() => {
        fixture.detectChanges();
        const el = fixture.nativeElement.querySelector('p');
        expect(el.innerText).toContain('user1');
    }));
});
