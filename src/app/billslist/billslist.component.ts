import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Bill } from '../bill';
import { ViewbillService } from '../viewbill.service';

@Component({
  selector: 'app-billslist',
  templateUrl: './billslist.component.html',
  styleUrls: ['./billslist.component.css']
})
export class BillslistComponent implements OnInit {

  homedatas:any;
  homedatas1: any;
  inform: any;
  homedata: Bill= new Bill();
  homedata1: Bill= new Bill();
  homedata2: Bill= new Bill();
  submitted: any;
  newval: any;
  newval2: any;
  newval1: any;
  // @ViewChild('htmlData') htmlData!: ElementRef;

  constructor(private billserviceService:ViewbillService) {}

  addbillform = new FormGroup({
  
    mobile_no: new FormControl('', )
    

  });


  submit(){
    console.log("kumar",this.addbillform.value);

    

    this.homedata.mobileNo=this.addbillform.value.mobile_no;
   
    // this.save();
    this.validate();
    this.addbillform.reset();
    // alert("Registration Successful");
  }

//   save() { //Calls the REST API throgh the services
//     this.servicesservice.userRegisterService(this.obj)
//     .subscribe((data: any)=>console.log(data)
    
//     , 
//       (    error: any)=>console.log(error));
//     this.obj = new Register();
// }



  
  validate(){
    //Logic for validating the user credentials
    this.billserviceService.getbillList().subscribe(data =>{
  
      this.homedatas1 =data; // we are pulled data from backend to the UI inside TS file and taken on HTML file. 
      console.log(this.homedatas1);
      // console.log(this.homedatas1[0]);
      // console.log(this.homedatas1[1]);

  // console.log(this.inform);
  // console.log(this.inform.amt);
  for (let i = 0; i < 5; i++) {
   // console.log ("Block statement execution no." + i);
  
      if(this.homedata.mobileNo == this.homedatas1[i].mobileNo ){
      
       console.log(this.homedatas1[i]);
 this.newval=this.homedatas1[i].amt;
 this.newval1=this.homedatas1[i].mobileNo;
 this.newval2=this.homedatas1[i].billId;
 console.log(this.newval);

  this.submitted = true;
  break;
  
      }
      else{
  console.log("not validated");
  this.submitted = false;
      }
    }
    
    })
  }

  // public openPDF(): void {
  //   let data: any = document.getElementById('data');
  //   html2canvas(this.homedatas).then((canvas) => {
  //     let fileWidth = 208;
  //     let fileHeight = (canvas.height * fileWidth) / canvas.width;
  //     const FILEURI = canvas.toDataURL('image/png');
  //     let PDF = new jsPDF('p', 'mm', 'a4');
  //     let position = 0;
  //     PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
  //     PDF.save('angular-demo.pdf');
  //   });
  // }

  ngOnInit(): void {

    this.billserviceService.getbillList().subscribe(data =>{

      this.homedatas =data;  // we are pulled data from backend to the UI inside TS file and taken on HTML file. 
      console.log(this.homedatas);
      // this.dtTrigger.next();
  
      })


  }

}

