import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

    constructor() { }

    getEmployee(): Array<{}> {
        return [
            {
                name: 'user1',
                surname: 'usersurname1'
            },
            {
                name: 'user2',
                surname: 'usersurname2'
            }
        ];
    }
}
