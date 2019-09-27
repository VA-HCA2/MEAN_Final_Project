import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup} from '@angular/forms';
import { Leagues } from '../models/leagues.model';

import { UserService } from './../providers/user.service';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css']
})

export class LeaguesComponent {
// dinamically create 
  form: FormGroup;
  leagues = [];

  constructor(private userService: UserService) {
  }

getLeagues() {
  this.userService.getLeagues().subscribe(data => {
    data.forEach((league, index) => {
      this.leagues.push(new Leagues(league.Name));
    })
  });
}

submit() {
  console.log(this.form.value);
}
/// 
  private selectedLink: string="searchLeagues";

  private isTeamsSelected = false;
  private isLeaguesSelected = false;

  setradio(val: string): void
  {  
    if (val === 'teams') {
      this.isTeamsSelected = true;
    }

    else{
      this.isTeamsSelected = false;
    }

    if (val === 'leagues') {
      console.log('***');
      this.isLeaguesSelected = true;
      this.getLeagues();
    }

    else{
      this.isLeaguesSelected = false;
    }
  }

  isSelected(name: string): boolean   
  {  
  
        if (!this.selectedLink) { // if no radio button is selected, always return false so every nothing is shown  
            return false;  
  }  
  
        return (this.selectedLink === name); // if current radio button is selected, return true, else return false  
    }  


  
}  





