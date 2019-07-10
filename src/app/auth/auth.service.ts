import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';


interface UserInfo {
  email: string;
  password: string;
  displayName?: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public user$: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth) {
    this.user$ = firebaseAuth.authState;
  }

  public login({ email, password }: UserInfo): Promise<firebase.auth.UserCredential> {
    return this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password);
  }

  public logout(): Promise<void> {
    return this.firebaseAuth.auth.signOut();
  }

  public signUp({ email, password, displayName }: UserInfo): Promise<void | firebase.auth.UserCredential> {
    return this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        return this.firebaseAuth.auth.currentUser.updateProfile({
          displayName,
          photoURL: '',
        });
      });
  }
}
