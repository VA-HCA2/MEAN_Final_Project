import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { FormGroup } from '@angular/forms';
import { TeamsService } from './../providers/teams.service';
import { UserService } from './../providers/user.service';
import { Team } from '../models/team.models';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css']
})

export class LeaguesComponent implements OnInit {
  form: FormGroup;
  username: string = '';
  password: string = ''
  teams: Array<Team> = [];

  constructor(
    private teamsService: TeamsService,
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router) {
  }

  ngOnInit() {
    
    // If user is not sigin in redirect to login page. 
    if (!this.userService.getAuthStatus()) {
           this.router.navigate(['login']);
     }

    //Show teams on load on the table 
    this.teamsService.getTeams().subscribe(data => {
      data.forEach((team, index) => {
        this.teams.push(new Team(team.TeamName, team.ManagerName, team.ManagerPhone));
      })
    });
  }
}







