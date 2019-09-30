import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../providers/user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  sub: any;
  userid: number = 0;
  // Array for users 
  users: Array<User> = [];

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    // Statement used if the user is not Auth and not an admin 
    if (!this.userService.getAuthStatus() && !this.userService.getIsAdminStatus()) {
      this.router.navigate(['/']);
    }
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.userid = params['userid'];
      });

     // Show non admin users on the table  
    this.userService.getUsers().subscribe(data => {
      data.forEach((user, index) => {
        this.users.push(new User(user.ID, user.username, user.email, user.password));
      })
    });
  }

  //Go back button on click navigate to leagues page  
  goBack(): void {
    this.router.navigate(['leagues'], {
      queryParams: { userid: this.userid }
    })
  }
}

