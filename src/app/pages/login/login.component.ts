import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/user/login';
import { LoginService } from 'src/app/service/user/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  username: string;
  password: string;
  rememberMe: boolean = false;
  loginForm: Login
  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit() {}
  ngOnDestroy() {}

  login(): void {
    if (this.username && this.password) {
      this.loginForm = new Login(this.username, this.password)
      this.loginService.login(this.loginForm)
        .subscribe(
          (res) => {
            // Login successful, navigate to home page or desired route
            console.log(res);
            this.router.navigate(['dashboard']);
          },
          error => {
            // Handle login error
            console.log(error)
            alert("wrong email or password")
          }
        );
    }
  }

  forgotPassword(): void {
    this.router.navigate(['/forgot-password']);
  }

  createNewAccount(): void {
    this.router.navigate(['/register']);
  }

}
