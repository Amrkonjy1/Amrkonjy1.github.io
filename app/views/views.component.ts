import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { collectionSnapshots } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';
import { map } from 'rxjs';
import { ServerService } from '../services/server.service';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.css']
})
export class ViewsComponent implements OnInit {
   listofDoc: any[] = [];
  constructor(private ServerService: ServerService) { }

  ngOnInit(): void {
    collectionSnapshots(this.ServerService.getAll()).pipe(
      map((listOfDocs) => {
        return listOfDocs.map((doc) => {
          return ({ id: doc.id, ...doc.data() })
        })

      }))
   .subscribe(data => {
    this.listofDoc= data;
    this.ServerService.listOfDocs = data;
  }
    );

}
}