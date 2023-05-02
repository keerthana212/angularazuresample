import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Bill } from '../bill';
import { ViewbillService } from '../viewbill.service';

@Component({
  selector: 'app-billdetails',
  templateUrl: './billdetails.component.html',
  styleUrls: ['./billdetails.component.css']
})
export class BilldetailsComponent implements OnInit {
  bill1 : Bill= new Bill();
  nameuser: any;
  message='';

  constructor(private billserviceService:ViewbillService) { }
  
  addform = new FormGroup({
   
    name: new FormControl('', [Validators.required]),
    mobileNo: new FormControl('', [Validators.required]),
    services: new FormControl('', [Validators.required]),
    plan: new FormControl('', [Validators.required]),
    amt: new FormControl('', [Validators.required]),
  });

  submit(){
    console.log(this.addform.value);
    console.log("Submit successful");
    this.nameuser=this.addform.value;
    // this.homedata.name="jeevan";
    // this.homedata.acc_no="1234567";
    this.bill1 .billId=this.nameuser.billId;
    this.bill1 .mobileNo=this.nameuser.mobileNo;
    this.bill1 .name=this.nameuser.name;
    this.bill1 .plan=this.nameuser.plan;
    this.bill1 .services=this.nameuser.services;
    this.bill1 .amt=this.nameuser.amt;
    this.save();
    this.addform.reset();
  }

  save() {​                                   //Calls the REST API throgh the services
this.billserviceService.createhomelist(this.bill1).subscribe(
  data =>{ console.log(data);
  this.message="Recharge  successful";},
  error => {console.log(error);
  this.message=error.error;
  }
)
  }


  ngOnInit(): void {
  }

}
