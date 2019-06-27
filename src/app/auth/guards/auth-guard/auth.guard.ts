import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate,
  CanLoad,
  Router,
  Route,
  UrlSegment,
} from '@angular/router';
import { Observable } from 'rxjs';
import { tap, take, map } from 'rxjs/operators';

import { AuthService } from '../../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(
    private router: Router,
    private authService: AuthService,
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.isAuthenticated().pipe(
      tap(isAuthenticated => isAuthenticated || this.router.parseUrl('/auth/login')),
    );
  }

  canLoad(route: Route, segments: UrlSegment[]) {
    return this.isAuthenticated().pipe(
      tap(isAuthenticated => isAuthenticated || this.router.navigate(['/auth', 'login'])),
    );
  }

  isAuthenticated(): Observable<boolean> {
    return this.authService.user$.pipe(
      take(1),
      map(user => !!user),
    );
  }
}
