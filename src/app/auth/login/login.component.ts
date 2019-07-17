import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'cb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public showPassword: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {}

  public ngOnInit(): void {
    this.initLoginForm();
  }

  public onSubmit(): void {
    this.authService.login(this.loginForm.value)
      .then(() => this.router.navigate(['/']));
  }

  public hasError(controlName: string, errorName: string): boolean {
    return this.loginForm.get(controlName).hasError(errorName);
  }

  private initLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
}
