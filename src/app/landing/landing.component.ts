import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { filter, takeUntil } from 'rxjs/operators';
import { ComponentDestroyed } from 'src/app/shared/helpers/component-destroyed';

@Component({
  selector: 'cb-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingComponent extends ComponentDestroyed implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
    super();
  }

  public ngOnInit(): void {
    this.authService.isAuthenticated()
      .pipe(
        filter(isAuthenticated => !!isAuthenticated),
        takeUntil(this.destroy$),
      )
      .subscribe(() => this.router.navigate(['/recipes']));
  }

  public login(): void {
    this.authService.login();
  }

  public signUp(): void {
    this.authService.signUp();
  }
}
