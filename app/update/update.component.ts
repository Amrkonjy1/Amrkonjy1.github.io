import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServerService } from '../services/server.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id?: string;
  doc: {name:string, state:string,garbage:string } ={
    name: "",
    state: "",
    garbage: ""
  };

  @ViewChild("f") signupForm?: NgForm;
  constructor(private activeRoute: ActivatedRoute,
                 private ServerService: ServerService) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe( (params)=>{
     this.id = params ['id'];
     this.doc = {...this.ServerService.getDoc(this.id!)};
      console.log(this.doc);
    } );
  }
   

  onUpdate() {
 this.ServerService.updateDocument(this.id!, 
     this.signupForm?.value.name,
     this.signupForm?.value.State,
     this.signupForm?.value.garbage
     )
  alert("Update successfully")
  }

}