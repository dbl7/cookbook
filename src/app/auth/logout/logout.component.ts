import { Component, OnInit, NgZone, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoutComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private zone: NgZone,
  ) {}

  ngOnInit() {
    this.authService.logout()
      .then(() => this.zone.run(() => this.router.navigate(['/auth/login'])));
  }
}
