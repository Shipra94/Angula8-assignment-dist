import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Character } from '../models/character';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  constructor(private http: HttpClient) { }
  getCharacterList(){
    return this.http.get<Character[]>(`${environment.apiEndPoint}`).pipe(map(data =>{
      return data;
    }));
  }
}
