import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app"
import { environment } from 'src/environments/environment';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

// connect to firebase
const app =  initializeApp(environment.firebase);
// using the connection to firebase allow access the user function
const auth = getAuth(app);

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // to be connected to the page service

  createUser (email: string, password: string, username: any) {
    return new Promise<any>((resolve, reject) => {
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential)=> {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: username, photoURL: "https://firebasestorage.googleapis.com/v0/b/findbeez.appspot.com/o/display-picture%2Fuser-default.png?alt=media&token=17253f11-b1c0-4e36-9f09-edc78076d7be"
        }).then(() => {

        }).catch((error) => {

        });
      })
    })
  }

  // to be connected to the page service

  loginUser (email: string, password: string) {
    return new Promise<void>((resolve, reject) => {
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential)=> {
        const user = userCredential.user;
        resolve();
      }).catch(() => {
        reject();
      });
    })
  }

  updateUser (newName : string) {
    const cUser = auth.currentUser;
        return new Promise<any>((resolve,reject) => {
          if (cUser != null) {
            updateProfile(cUser, {
              displayName: newName
            }).then(() => {
  
            }).catch((error) => {
  
            })
          }
       });
      
  }

}





