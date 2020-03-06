import { Component, OnInit } from '@angular/core';
import { ListRefreshService } from 'src/app/services/list-refresh.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-character-filter-tags',
  templateUrl: './character-filter-tags.component.html',
  styleUrls: ['./character-filter-tags.component.scss']
})
export class CharacterFilterTagsComponent implements OnInit {
  origin: string[];
  originSubscription: Subscription
  constructor(private listService: ListRefreshService) {

   }

  ngOnInit() {
  }

}
