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

  // Array to hold Users Objects
  users: Array<User> = [];

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

     if (!this.userService.getAuthStatus() || !this.userService.getIsAdminStatus())
     {
      this.router.navigate(['/']);
    }
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.userid = params['userid'];
      });

  //    this.userService.getUsers().subscribe(data => {
  //     data.forEach((user, index) => {
  //        this.users.push(new User(user.ID, user.username, user.email, user.password));
  //      })
  //  });

    // getUsers() method in User Service
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }
  }
