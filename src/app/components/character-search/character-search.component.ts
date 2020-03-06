import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup,} from '@angular/forms';
import { Observable, of } from 'rxjs';
import { filter} from 'rxjs/operators';
import { Character } from 'src/app/models/character';
import { ListRefreshService } from 'src/app/services/list-refresh.service';

@Component({
  selector: 'app-character-search',
  templateUrl: './character-search.component.html',
  styleUrls: ['./character-search.component.scss']
})
export class CharacterSearchComponent implements OnInit {
  searchText: string;
  group: FormGroup; // form
  searchControl: FormControl;
  characters$: Character[];
  constructor(private listrefresh: ListRefreshService, private builder: FormBuilder) {
    this.searchControl = new FormControl();
    this.group = this.builder.group({
      "search": this.searchControl
    })
   }

  ngOnInit() {
    this.searchControl
      .valueChanges
      .pipe(filter(value => !value))
      .subscribe(()=>{
        of(this.characters$).subscribe(()=>{this.listrefresh.getResultList()})
      });
  }


  getsearhResult(){
    console.log("search result comp", this.searchControl.value)
    this.listrefresh.getSearchList(this.searchControl.value.toLowerCase());
  }

}
