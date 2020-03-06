import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { startWith } from 'rxjs/operators';
import { ListRefreshService } from 'src/app/services/list-refresh.service';

@Component({
  selector: 'app-character-filter',
  templateUrl: './character-filter.component.html',
  styleUrls: ['./character-filter.component.scss']
})
export class CharacterFilterComponent implements OnInit {
  genders: string[];
  species: string[];
  origins: string[];
  speciesChecked: string[];
  gendersChecked: string[];
  originChecked: string[];
  form: FormGroup;
  filterControl: FormControl;
  constructor(private characterService : CharacterService, private formBuilder: FormBuilder, private listService: ListRefreshService) { 
    this.filterControl = new FormControl(true);
    this.form = this.formBuilder.group({
      'filter': this.filterControl
    })
  }

  ngOnInit(): void {
    this.characterService.getCharacterList().subscribe(value => {
      this.genders = value["results"]
        .map(x => x.gender)
        .filter(function (v, i, self) {
          return self.indexOf(v) == i;
        });
      this.gendersChecked = [...this.genders];
      this.species = value["results"]
        .map(x => x.species)
        .filter(function (v, i, self) {
          return self.indexOf(v) == i;
        });
      this.speciesChecked = [...this.species];
      this.origins = value["results"].map(x => x.origin["name"])
        .filter(function (v, i, self) {
          return self.indexOf(v) == i;
        });
      this.originChecked = [...this.origins];
    })
  }

  checked(key, value, event) {
    this.filterControl
      .valueChanges
      .pipe(startWith(null))
      .subscribe(() => {
        if (key == 'gender') {
          if (event.target.checked && this.gendersChecked.indexOf(value) === -1) {
            this.gendersChecked = [...this.gendersChecked, value]
          } else if (!event.target.checked && this.gendersChecked.indexOf(value) > -1) {
            let i = this.gendersChecked.findIndex(x => x === value);
            this.gendersChecked.splice(i, 1);
          }
        }
        else if (key == "species") {
          if (event.target.checked && this.speciesChecked.indexOf(value) === -1) {
            this.speciesChecked = [...this.speciesChecked, value]
          } else if (!event.target.checked && this.speciesChecked.indexOf(value) > -1) {
            let i = this.speciesChecked.findIndex(x => x === value);
            this.speciesChecked.splice(i, 1);
          }
        }
        else if (key == "origin") {
          if (event.target.checked && this.originChecked.indexOf(value) === -1) {
            this.originChecked = [...this.originChecked, value]
          } else if (!event.target.checked && this.originChecked.indexOf(value) > -1) {
            let i = this.originChecked.findIndex(x => x === value);
            this.originChecked.splice(i, 1);
          }
        }
      })
      this.listService.genderItems = this.gendersChecked;
      this.listService.speciesItems = this.speciesChecked;
      this.listService.originItems = this.originChecked;
  }

}
