import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';
import { NgModel, NgForm } from '@angular/forms';

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
  constructor() { }

  ngOnInit() {
  }
  onBlur(field : NgModel) {
    console.log('in onBlur: ', field.valid);
  }
  
  onSubmit(form: NgForm) {
    console.log('in onSubmit: ', form.valid);
  }
}
