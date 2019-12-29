import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';
import { NgModel, NgForm } from '@angular/forms';
import { DataService } from '../data/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {
 
  originalUserSettings:UserSettings ={
    name: null,
    emailOffers: true,
    interfaceStyle: 'dark',
    subscriptionType: 'Annual',
    notes: '測試\n換行...'
  }
  // ... 只能用淺複製 ,深複製Lodash
  userSettings : UserSettings = { ...this.originalUserSettings };
  postError = false;
  postErrorMessage = '';
  subscriptionTypes: Observable<string[]>;
  
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.subscriptionTypes = this.dataService.getSubscriptionTypes();
  }

  onBlur(field : NgModel) {
    console.log('in onBlur: ', field.valid);
  }
  
  onSubmit(form: NgForm) {
    console.log('in onSubmit: ', form.valid);
    if (form.valid) {
      this.dataService.postUserSettingsForm(this.userSettings).subscribe(
        result => console.log('success: ', result),
        error => this.onHttpError(error)
      );
    }
    else {
      this.postError = true;
      this.postErrorMessage = "Please fix the above errors"
    }
  }

  onHttpError(errorResponse: any) {
    console.log('error: ', errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }
  
}
