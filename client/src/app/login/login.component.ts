import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './../providers/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  pageTitle = 'Login';
  userid: number = 0;
  username: string = '';
  password: string = '';


  error: boolean = false;
  errMsg: string = '';
  
  // create instance of UserService
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}

  onSubmit(): void {
    if (this.username == '') {
      this.errMsg = 'User name is required.';
      this.error = true;
    } else if (this.password == '') {
      this.errMsg = 'Password is required.';
      this.error = true;
    } else {
      this.error = false;
      this.errMsg = '';

      // Call UserService to authenticate
      this.userService.login(this.username, this.password).subscribe(data => {
        if (data['error']) {
          this.errMsg = 'Invalid Credentials. Please try again ';
          this.error = true;
          this.userService.setAuthStatus(false);
        }
        // If it's admin set admin and auth status to true and navigate the user to leagues page 
        else if (data['is_admin'])
       {
          this.userService.setAdminStatus(true);
          this.userService.setAuthStatus(true);
          this.router.navigate(['/leagues'], { queryParams: { userid: data['ID'] } });
        }
        // If it's auth login and navigate the user to leagues page 
        else {
          this.userService.setAuthStatus(true);
          this.router.navigate(['/leagues'], { queryParams: { userid: data['ID'] }}); 
        }
      });
    }
  }
 // On reset functionality 
  onReset(): void {
    this.username = '';
    this.password = '';

    this.error = false;
    this.errMsg = '';
  }
}
