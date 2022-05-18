// import { identifierName } from "@angular/compiler";
// import { Injectable } from "@angular/core";
// import { addDoc, Firestore, collection, doc, setDoc, getDoc, updateDoc} from "@angular/fire/firestore";
// import user from "../models/user";


// @Injectable({ providedIn: 'root' })
// export class ServerService {
//     listOfDocs:any[]=[];
//     constructor(private db: Firestore) {

//     }
//     getAll() {
//         return collection(this.db, "sensors");
//     }
//     getDoc( id:string){
//         return this.listOfDocs.find((doc)=>{
//             return doc.id==id;
//         })
//     }
//      updateDocument(id: string, name: string, state: String, garbage:String) {
//         const dataUpdate = doc(this.db, "sensors", id);
//         console.log(dataUpdate);
//         return  updateDoc(dataUpdate, {
//             name: name,
//             state: state,
//             garbage:garbage
//         });
//     }
//     getDocument(id: string) {
//         const dbInstance = collection(this.db, "sensors");
//         return getDoc(doc(dbInstance, id));
//     }
    

// }
import { Injectable} from "@angular/core";
import User from "../models/user";
import { addDoc, Firestore,collection, doc, updateDoc } from "@angular/fire/firestore";


@Injectable({ providedIn: 'root' })
export class ServerService {
       
  listOfDocs: any[] =[];
    constructor(private db: Firestore)  {}

    addNewDocument (Sensors: User) {
        const dbInstance = collection(this.db, "sensors");
        return addDoc(dbInstance, {  ...Sensors});
    }

    getAll () {
        return collection (this.db, "sensors");
    }


    getDoc(id:string){
        return this.listOfDocs.find( (doc)=>{
            return doc.id == id;
        }   )
    }

    updateDocument(id: string,name:string,  state:string, garbage:string){
        const dataUpdate = doc(this.db, "sensors", id);
        return updateDoc(dataUpdate,  {
            name: name,
            state: state,
            garbage:garbage
        });
    }
}