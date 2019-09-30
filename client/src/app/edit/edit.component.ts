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
  error: boolean = false;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    if (!this.userService.getAuthStatus()) {
      this.router.navigate(['/']);
    }

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
    this.error = true;
  } else {
    this.error = false;
    this.errMsg = '';
    this.userService.editUsers(this.userid,this.email).subscribe(data => {
      if (data['error']) {
        this.errMsg = 'Error unable to update';
        this.error = true;
      } else {
        this.userService.getUser(this.userid).subscribe(data => {
          this.email =  data['email'];
        })
      }
    });
  }
}

onDelete():void{
  this.userService.deleteUser(this.userid).subscribe(data => {
    this.userService.setAuthStatus(false);
    this.router.navigate(['/']);
  });
}

goBack(): void {
  this.router.navigate(['leagues'], {
    queryParams: { userid: this.userid }
  })
}
}