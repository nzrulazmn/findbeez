import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app"
import { environment } from 'src/environments/environment';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

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
  
  createUser (email: string, password: string) {
    return new Promise<any>((resolve, reject) => {
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential)=> {
        const user = userCredential.user;
      })
    })
  }

  //to be connected to the page service

  // async signinUser (email, password) {
  //   signInWithEmailAndPassword(auth, email, password)
  //   .then((userCredential) => {
  //     const user = userCredential.user;
  //   })
  // }

}
