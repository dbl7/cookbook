import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { filter } from 'rxjs/operators';
import { untilComponentDestroyed } from 'src/app/shared/helpers/until-component-destroyed';

@Component({
  selector: 'cb-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  public ngOnInit(): void {
    this.authService.isAuthenticated()
      .pipe(
        filter(isAuthenticated => !!isAuthenticated),
        untilComponentDestroyed(this),
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
