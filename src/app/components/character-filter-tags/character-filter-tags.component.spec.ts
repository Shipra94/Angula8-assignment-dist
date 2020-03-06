import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterFilterTagsComponent } from './character-filter-tags.component';

describe('CharacterFilterTagsComponent', () => {
  let component: CharacterFilterTagsComponent;
  let fixture: ComponentFixture<CharacterFilterTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterFilterTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterFilterTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
