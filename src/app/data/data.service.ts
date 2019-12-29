import { Injectable } from '@angular/core';
import { UserSettings } from './user-settings';
import { Observable,of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  getSubscriptionTypes(): Observable<string[]> {
    return of(['Monthly', 'Annual', '終身']);
  }

  postUserSettingsForm(userSettings: UserSettings) : Observable<any> {
    return this.http.post('https://putsreq.com/0FCLNZa8vsFZvqFaIA57', userSettings);
    //return of(userSettings);
  }
 
}
