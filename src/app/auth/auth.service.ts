import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth) {
    this.user$ = firebaseAuth.authState;
   }

  login({ email, password }) {
    return this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.firebaseAuth.auth.signOut();
  }

  signUp({ email, password, displayName }) {
    return this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(() =>
        this.firebaseAuth.auth.currentUser.updateProfile({
            displayName,
            photoURL: '',
          }),
        );
  }
}
