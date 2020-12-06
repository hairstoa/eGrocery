import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private authService: AuthService, private router: Router) { }
// returns a boolean for if the user is logged in, otherwise naviagates to the sign up page.
  canActivate(): Observable<boolean> {
    if (!this.authService.isUserLoggedIn$.value) {
      this.router.navigate(["signup"]);
    }
    return this.authService.isUserLoggedIn$;
  }
}
