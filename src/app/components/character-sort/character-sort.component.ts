import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ListRefreshService } from 'src/app/services/list-refresh.service';

@Component({
  selector: 'app-character-sort',
  templateUrl: './character-sort.component.html',
  styleUrls: ['./character-sort.component.scss']
})
export class CharacterSortComponent implements OnInit {
  sortControl: FormControl;
  sort: FormGroup
  isDesc: Boolean;
  constructor(private builder: FormBuilder, private listRefresh : ListRefreshService) {
    this.sortControl = new FormControl('');
    this.sort = this.builder.group({
      "sort": this.sortControl
    })
  }

  ngOnInit() {
  }
  sortCharacters(e): void{
    this.listRefresh.getSortedList(this.sortControl.value);
  }

}
