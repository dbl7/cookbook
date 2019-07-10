import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { AuthService } from '../../auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService,
  ) {}

  public canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.isAuthenticated().pipe(
      tap(isAuthenticated => {
        !isAuthenticated && this.router.parseUrl('/auth/login');
      }),
    );
  }

  public isAuthenticated(): Observable<boolean> {
    return this.authService.user$.pipe(
      map(user => !!user),
    );
  }
}
