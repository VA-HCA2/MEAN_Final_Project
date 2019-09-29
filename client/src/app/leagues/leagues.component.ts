import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { League } from '../models/league.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LeaguesService } from './../providers/leagues.service';
import { TeamsService } from './../providers/teams.service';
import { Team } from '../models/team.models';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css']
})

export class LeaguesComponent {
  // dinamically create 
  form: FormGroup;
  teams = [];
  leagues = [];

  constructor(private LeaguesService: LeaguesService,
    private teamsService: TeamsService,
    private router: Router) {
  }

// Dropdown for Leagues 
  getLeagues() {
    this.LeaguesService.getLeagues().subscribe(data => {
      data.forEach((league, index) => {
        this.leagues.push(new League(league.Name, league.Code,league.Description));
      })
    });
  }

// Dropdown for Teams
  getTeams(){
    this.teamsService.getTeams().subscribe(data => {
      data.forEach((team, index) => {
        this.teams.push(new Team (team.TeamName,team.ManagerName,team.ManagerPhone));
      })
    });
  }
  
  // Filter radio buttons 
  private selectedLink: string = "searchLeagues";
  private isTeamsSelected = false;
  private isLeaguesSelected = false;
  setradio(val: string): void {
    if (val === 'teams') {
      this.isTeamsSelected = true;
      this.getTeams();
    }

    else {
      this.isTeamsSelected = false;
    }

    if (val === 'leagues') {
      this.isLeaguesSelected = true;
      this.getLeagues();

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








