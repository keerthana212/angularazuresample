import { Component, OnInit } from '@angular/core';
import { CompliantserviceService } from '../complaintservice.service';
import { UserComplaint } from '../user-complaint';

@Component({
  selector: 'app-tracklist',
  templateUrl: './tracklist.component.html',
  styleUrls: ['./tracklist.component.css']
})
export class TracklistComponent implements OnInit {

  dataLayout : UserComplaint= new UserComplaint();
  // homedatas!: Observable<Homedata[]>;  
  localVar:any;

  constructor(private homeserviceService:CompliantserviceService) { }

  ngOnInit(): void {
    this.homeserviceService.getHomeList().subscribe(data =>{
      this.localVar =data;  // we are pulled data from backend to the UI inside TS file and taken on HTML file. 
      console.log(this.localVar);
      // this.dtTrigger.next()
      })
  }

}
