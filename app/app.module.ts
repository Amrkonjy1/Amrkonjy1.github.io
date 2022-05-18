import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment '
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { UpdateComponent } from './update/update.component';
import { FormsModule } from '@angular/forms';
import { ViewsComponent } from './views/views.component';
const appRoutes: Routes = [
  { path: "views", component:ViewsComponent },
  {path:"update/:id",component: UpdateComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    ViewsComponent,
    UpdateComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
