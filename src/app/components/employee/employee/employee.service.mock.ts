
import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeServiceMock {
    constructor() { }

    getEmployee(): Array<{}> {
        return [
            {
                name: 'user1',
                surname: 'usersurname1'
            }
        ];
    }
}
