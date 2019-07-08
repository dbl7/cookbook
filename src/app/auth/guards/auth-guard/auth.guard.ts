import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate,
  Router,
  Route,
  UrlSegment,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthService } from '../../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService,
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.isAuthenticated().pipe(
      map(isAuthenticated => isAuthenticated || this.router.parseUrl('/auth/login')),
    );
  }

  isAuthenticated(): Observable<boolean> {
    return this.authService.user$.pipe(
      map(user => !!user),
    );
  }
}
