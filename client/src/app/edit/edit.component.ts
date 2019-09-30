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
    // If user is not authorized navigate to home page
    if (!this.userService.getAuthStatus()) {
      this.router.navigate(['/']);
    }

    // Take userid 
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.userid = params['userid'];
      });

      // Display username an email information on the page 
      this.userService.getUser(this.userid).subscribe(data => {
        this.username = data['username'];
        this.email = data['email'];
      })
    }
 
    // On edit functionality 
 onEdit(): void{
   // validation if email is not entered 
  if (this.email.trim() == '') {
    this.errMsg = 'Email Address required';
    this.error = true;
  } else {
    this.error = false;
    this.errMsg = '';
    // Call edit users 
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
// Delete functionaliaty 
onDelete():void{
  this.userService.deleteUser(this.userid).subscribe(data => {
    this.userService.setAuthStatus(false);
    this.router.navigate(['/']);
  });
}

// Go back functionality 
goBack(): void {
  this.router.navigate(['leagues'], {
    queryParams: { userid: this.userid }
  })
}
}