import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from './../providers/user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  sub: any;

  userid: number = 0;
  username: string = '';
  email: string = '';

  errMsg: string = '';
  errorFound: boolean = false;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

  this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.userid = params['userid'];
      });

      this.userService.getUser(this.userid).subscribe(data => {
        this.username = data['username'];
        this.email = data['email'];
      })
    }

onEdit(): void{
  if (this.email.trim() == '') {
    this.errMsg = 'Email Address required';
    this.errorFound = true;
  } else {
    this.errorFound = false;
    this.errMsg = '';
    this.userService.editUsers(this.userid,this.email).subscribe(data => {
      if (data['errorFound']) {
        this.errMsg = 'Update unsuccessful.';
        this.errorFound = true;
      } else {
        this.userService.getUser(this.userid).subscribe(data => {
          this.username = data['username'];
          this.email =  data['email'];
        })
      }
    });
  }
}
}