import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TokenService } from 'src/app/services/token/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  constructor(private fb: FormBuilder, private t: TokenService) { }

  loginForm = this.fb.group(
    {
      username: ['', Validators.required],
      password: ['', Validators.required]
    }
  );

  getToken() {
    const user = this.loginForm.value;

    if (user.username && user.password) {
      this.t.requesttoken(user.username, user.password)
      .subscribe(
        (res) => {
          console.log(res.toString);
        }
      )
    }
  }

}
