import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'cb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  public isAuthenticated$: Observable<boolean>;

  constructor(private authService: AuthService) {}

  public ngOnInit(): void {
    this.isAuthenticated$ = this.authService.isAuthenticated();
  }
}
