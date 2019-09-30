import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import { League } from '../models/league.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LeaguesService } from './../providers/leagues.service';
import { TeamsService } from './../providers/teams.service';
import { UserService } from './../providers/user.service';
import { Team } from '../models/team.models';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css']
})

export class LeaguesComponent implements OnInit {
  // dinamically create 
  form: FormGroup;
  username: string = '';
  password: string = ''
  teams : Array<Team> = [];
  leagues = [];

  private sub: any;
  private userId;
  private id;
  
  constructor(private LeaguesService: LeaguesService,
    private teamsService: TeamsService,
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router) {
  }
// If user is not auth redirect it to login page
  // ngOnInit() {
  //   if (!this.userService.getAuthStatus()) {
  //     this.router.navigate(['login']);
  //   }
  // }
  ngOnInit() {
    console.log('!!!***');
    this.LeaguesService.getLeagues().subscribe(data => {
      data.forEach((league, index) => {
        this.leagues.push(new League(league.Name, league.Code,league.Description));
      })
      console.log(this.leagues);
    });
  }


//Dropdown for Leagues 
/*
  getLeagues() {
    console.log('***');
    this.LeaguesService.getLeagues().subscribe(data => {
      data.forEach((league, index) => {
        this.leagues.push(new League(league.Name, league.Code,league.Description));
      })
      console.log(this.leagues);
    });
  }
  */
  
  onLeaguesChange(val){
    this.teams=[];
    this.LeaguesService.getTeamsForLeagues(val).subscribe(data=> {
      data.forEach((team, index) => {
        this.teams.push(new Team(team.Name, team.ManagerName,team.ManagerPhone));
    })
    console.log(this.teams);
  });
}


// Dropdown for Teams
  // getTeams(){
  //   this.LeaguesService.getLeagues().subscribe(data => {
  //     data.forEach((team, index) => {
  //       this.teams.push(new Team (team.TeamName,team.ManagerName,team.ManagerPhone));
  //     })
  //   });
  // }
  
  // Filter radio buttons 
  private selectedLink: string = "searchLeagues";
  private isTeamsSelected = false;
  private isLeaguesSelected = false;
  setradio(val: string): void {
    if (val === 'teams') {
      this.isTeamsSelected = true;
      //this.getTeams();
    }

    else {
      this.isTeamsSelected = false;
    }

    if (val === 'leagues') {
      this.isLeaguesSelected = true;
      //this.getLeagues();

    }

    else {
      this.isLeaguesSelected = false;
    }

  }

  isSelected(name: string): boolean {

    if (!this.selectedLink) { // if no radio button is selected, always return false so every nothing is shown  
      return false;
    }

    return (this.selectedLink === name); // if current radio button is selected, return true, else return false  
  }
  
}









