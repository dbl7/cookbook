import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MatDialogRef } from '@angular/material/dialog';

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
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<SignUpComponent>,
  ) {}

  public ngOnInit(): void {
    this.initSignUpForm();
  }

  public onSubmit(): void {
    this.dialogRef.close(this.signUpForm.value);
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
