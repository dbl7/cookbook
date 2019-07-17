import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'cb-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpComponent implements OnInit {
  public signUpForm: FormGroup;
  public showPassword: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {}

  public ngOnInit(): void {
    this.initSignUpForm();
  }

  public onSubmit(): void {
    this.authService.signUp(this.signUpForm.value)
      .then(() => this.router.navigate(['/']));
  }

  public hasError(controlName: string, errorName: string): boolean {
    return this.signUpForm.get(controlName).hasError(errorName);
  }

  private initSignUpForm(): void {
    this.signUpForm = this.formBuilder.group({
      displayName: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
}
