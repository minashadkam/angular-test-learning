import { Component, OnInit } from '@angular/core';
import {EmployeeService} from './employee/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
})
export class EmployeeComponent  {

    text = 'user page';
    employee;

    constructor(private employeeService: EmployeeService) {
        this.employee = this.employeeService.getEmployee();
    }
}
