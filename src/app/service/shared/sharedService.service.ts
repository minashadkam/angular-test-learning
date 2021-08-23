import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GoogleData } from '../../model/googleData';

@Injectable({ providedIn: 'root' })
export class SharedService {

  constructor(private httpClient: HttpClient) { }

  public getGoogleMapData(): Observable<GoogleData> {

    return this.httpClient.get<GoogleData>('../../../assets/googleData.json');
  }

}
