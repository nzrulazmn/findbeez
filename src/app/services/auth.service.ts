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
  
  // async createUser (email, password) {
  //   createUserWithEmailAndPassword(auth, email, password)
  //   .then((userCredential)=> {
  //     const user = userCredential.user;
  //   })
  // }

  // async signinUser (email, password) {
  //   signInWithEmailAndPassword(auth, email, password)
  //   .then((userCredential) => {
  //     const user = userCredential.user;
  //   })
  // }

}
