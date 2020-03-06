import { Injectable } from '@angular/core';
import { Character } from '../models/character';
import { BehaviorSubject } from 'rxjs';
import { CharacterService } from './character.service';

@Injectable({
  providedIn: 'root'
})
export class ListRefreshService {
  //private _character: Character[];
  public character$ : BehaviorSubject<Character[]> = new BehaviorSubject(null);
  private _originItems:string[];
  private _speciesItems:string[];
  private _genderItems:string[];
  public originItems$: BehaviorSubject<string[]> = new BehaviorSubject(null);
  public speciesItems$: BehaviorSubject<string[]> = new BehaviorSubject(null);
  public genderItems$: BehaviorSubject<string[]> = new BehaviorSubject(null);
  public filterKey$: BehaviorSubject<string> = new BehaviorSubject(null); 
  constructor(private characterService: CharacterService) { }

  getResultList(){
    this.characterService.getCharacterList().subscribe((data: any) =>{
      this.character$.next(data.results); 
    });
  }
  getSearchList(value:string){
    console.log(value);
    let tempChar :Character[];
    this.character$.subscribe(data=>{
      tempChar = data;
    });
    tempChar = tempChar.filter(it => {
      return it.name.toLowerCase().includes(value);
    })
      this.character$.next(tempChar);
  }
  get originItems(){
    return this._originItems;
  }
  set originItems(value:string[]){
    this._originItems=value;
    this.originItems$.next(this._originItems);
    console.log(this.originItems$);
  }


  get speciesItems(){
    return this._speciesItems;
  }

  set speciesItems(value: string[]) {
    this._speciesItems = value;
    this.speciesItems$.next(this._speciesItems);
  }
  
  get genderItems(){
    return this._genderItems;
  }

  set genderItems(value: string[]) {
    this._genderItems = value;
    this.genderItems$.next(this._genderItems);
  }



  getSortedList(value:string){
    console.log(this.character$);
    let tempChar :Character[];
    this.character$.subscribe(data=>{
      tempChar = data;
    });
    if (value == 'desc') {
      this.character$.next( tempChar.sort((a, b) => (a.id < b.id) ? 1 : -1));
    }
    else if(value =='asc'){
      this.character$.next( tempChar.sort((a, b) => (b.id > a.id) ? -1 : 1))
    }
  }
}
