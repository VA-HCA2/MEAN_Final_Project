import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './../providers/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  pageTitle = 'Register';
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPass: string = '';

  error: boolean = false;
  errMsg: string = '';
  
  // create instance of UserService
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() { }

  onSubmit(): void {
    if (this.username == '') {
      this.errMsg = 'User name is required.';
      this.error = true;
    } else if (this.email == '') {
      this.errMsg = 'Email Address is required.';
      this.error = true;
    } else if (this.password == '') {
      this.errMsg = 'Password is required.';
      this.error = true;
    } else if (this.password.length < 8) {
      this.errMsg = 'Password must be at least 8 chars.';
      this.error = true;
    } else if (this.confirmPass == '') {
      this.errMsg = 'Please confirm password.';
      this.error = true;
    } else if (this.password != this.confirmPass) {
      this.errMsg = 'Passwords do not match';
      this.error = true;
    } else {
      this.error = false;
      this.errMsg = '';

      // Call UserService to Register
      this.userService.register(this.username, this.email, this.password).subscribe(data => {
        if (data['error']) {
          this.errMsg = 'Registration unsuccessful.';
          this.error = true;
        } else {
          this.router.navigate(['/login']); 
        }
      });
    }
  }

  onReset(): void {
    this.username = '';
    this.email = '';
    this.password = '';
    this.confirmPass = '';

    this.error = false;
    this.errMsg = '';
  }

}
