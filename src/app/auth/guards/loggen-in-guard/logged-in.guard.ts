import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  CanActivate,
  CanActivateChild,
} from '@angular/router';
import { map, tap } from 'rxjs/operators';

import { AuthService } from '../../auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoggedInGuard implements CanActivate, CanActivateChild {
  constructor(
    private router: Router,
    private authService: AuthService,
  ) {}

  public canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.isAuthenticated().pipe(
      tap(isAuthenticated => {
        isAuthenticated && this.router.parseUrl('/');
      }),
      map(isAuthenticated => !!isAuthenticated),
    );
  }

  public canActivateChild(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.canActivate(route);
  }

  public isAuthenticated(): Observable<boolean> {
    return this.authService.user$.pipe(
      map(user => !!user),
    );
  }
}
