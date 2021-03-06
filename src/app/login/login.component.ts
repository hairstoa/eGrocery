import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.createFormGroup();
  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      // name: new FormControl("", [Validators.required, Validators.minLength(2)]),
      email: new FormControl("demo@eGrocery.com", [Validators.required, Validators.email]),
      password: new FormControl("password1", [Validators.required, Validators.minLength(7)])

    })
  }

  login(): void { 
      this.authService
      .login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe();
    }
  }

