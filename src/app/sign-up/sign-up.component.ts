import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user=new User();
  message='';

  constructor(private _service : RegistrationService ,private _router:Router) { }

  ngOnInit(): void {
  }

  registerUser(){
    this._service.registrationUserFromRemote(this.user).subscribe(
      data =>{ console.log("response received");
      this.message="registration successful";},
      error => {console.log("exception occured");
      this.message=error.error;
      }
    )
    }

  
   

  }


