import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TokenService } from 'src/app/services/token/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  constructor(private fb: FormBuilder, private ts: TokenService) { }

  token = ''
  message = ''
  mark = false

  loginForm = this.fb.group(
    {
      username: [''],
      password: ['']
    }
  );

  getToken() {
    const user = this.loginForm.value;

    if (user.username && user.password) {
      this.ts.requesttoken(user.username, user.password)
        .subscribe(
          (res) => {
            console.log(res.token);
            this.token = res.token;
            this.mark = true;
            this.message = '';
          },
          (err) => {
            this.message = "Incorrect username or password";
            this.mark = false;
          }
        );
    }
  }

  sendToken() {
    this.ts.verifytoken(this.token)
    .subscribe(
      (res) => {
        this.message = res.message;
        
      }
      ,
      (err) =>{

        this.message = err.status + " " + err.statusText;
      }
    )

  }
}
