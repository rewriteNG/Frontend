import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-charnav',
  templateUrl: './charnav.component.html',
  styleUrls: ['./charnav.component.scss']
})
export class CharnavComponent implements OnInit {
  items = [
    { "route": "base", "title": "Character-Allgemein", "name": "Allgemein" },
    { "route": "value", "title": "Character-Grundwerte", "name": "Grundwerte" },
    // { "route": "skills", "title": "Character-Fähigkeiten", "name": "Fähigkeiten" },
    // { "route": "inventory", "title": "Character-Inventar", "name": "Inventar" },
    // { "route": "jutsu", "title": "Character-Jutsu", "name": "Jutsu" },
    // { "route": "special", "title": "Character-Besonderheiten", "name": "Besonderheiten" }
  ];
  constructor(
    private titleTagService: Title,
  ) { }

  ngOnInit(): void {
  }
  /**
   * sets the the Title of the Page in the Header
   * @param pageTitle 
   */
  public setTitle(pageTitle: string) {
    this.titleTagService.setTitle(pageTitle);
  }
}
