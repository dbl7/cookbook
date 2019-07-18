import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

import { Observable } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';

import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

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

  constructor(
    private firebaseAuth: AngularFireAuth,
    public dialogRef: MatDialog,
    private router: Router,
  ) {
    this.user$ = firebaseAuth.authState;
  }

  public isAuthenticated(): Observable<boolean> {
    return this.user$.pipe(
      map(user => !!user),
    );
  }

  public login(): void {
    this.dialogRef.open(LoginComponent)
    .afterClosed()
    .pipe(
      filter(user => !!user),
      switchMap(({ email, password }: UserInfo) => {
        return this.firebaseAuth.auth.signInWithEmailAndPassword(email, password);
      }),
    )
    .subscribe(() => this.router.navigate(['/recipes']));
  }

  public signUp(): void {
    this.dialogRef.open(SignUpComponent)
    .afterClosed()
    .pipe(
      filter(user => !!user),
      switchMap(({ email, password, displayName }: UserInfo) => {
        return this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password)
          .then(() => {
            return this.firebaseAuth.auth.currentUser.updateProfile({
              displayName,
              photoURL: '',
            });
          });
      })
    )
    .subscribe(() => this.router.navigate(['/recipes']));
  }

  public logout(): Promise<void> {
    return this.firebaseAuth.auth.signOut();
  }
}
