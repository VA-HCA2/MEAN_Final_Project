import { Component, OnInit } from '@angular/core';
import { UserService } from './../providers/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  sub: any;
  userid: number = 0;
  constructor(private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.sub = this.route
    .queryParams
    .subscribe(params => {
      this.userid = params['userid'];
    })
  };

  isAuth(): boolean {
    return this.userService.getAuthStatus();
  }

  onIndex(): void {
    this.router.navigate(['/']);
  }
  onRegister(): void {
    this.router.navigate(['/register']);
  }

  onLogin(): void {
    this.router.navigate(['/login']);
  }

  onLogOut(): void {
    this.userService.setAuthStatus(false);
    this.router.navigate(['/']);
  }
  onEdit(): void {
    this.router.navigate(['/edit'], {
      queryParams: { userid: this.userid }
    })
  }


}