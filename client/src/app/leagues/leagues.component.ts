import { Component, OnInit } from '@angular/core';
import { UserService } from './../providers/user.service';
import { $ } from 'protractor';
@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css']
})

export class LeaguesComponent {

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
      this.isLeaguesSelected = true;
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





