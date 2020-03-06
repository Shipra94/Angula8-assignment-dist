import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Character } from 'src/app/models/character';
import { CharacterService } from 'src/app/services/character.service';
import { ListRefreshService } from 'src/app/services/list-refresh.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {
  characters : Character[];
  charactersSubscription : Subscription;
  genderSubscription:Subscription;
  speciesSubscription:Subscription;
  originSubscription:Subscription;
  filterKeySubscription: Subscription;
  genderItems: string[];
  speciesItems: string[];
  originItems: string[];
  filterKey: string;
  constructor(private listrefresh: ListRefreshService) {

   }

  ngOnInit() {
    this.listrefresh.getResultList()
    this.charactersSubscription = this.listrefresh.character$.subscribe((value: Character[])=>{
      console.log('summary subscriber', value);
      this.characters= value;
    });
    this.genderSubscription = this.listrefresh.genderItems$.subscribe((value:string[])=>{
      this.genderItems=value
    });
    this.speciesSubscription = this.listrefresh.speciesItems$.subscribe((value:string[])=>{
      this.speciesItems=value
    });
    this.originSubscription = this.listrefresh.originItems$.subscribe((value:string[])=>{
      this.originItems=value
    });
    this.filterKeySubscription = this.listrefresh.filterKey$.subscribe((value:string)=>{
      this.filterKey=value
    });
  }
}
