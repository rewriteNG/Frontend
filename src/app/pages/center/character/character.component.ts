import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  items = [
    { "key": "Vorname", "value": "Max" },
    { "key": "Nachname", "value": "Mustermann" },
    { "key": "Fraktion", "value": "Test Fraktion" },
    { "key": "Rang", "value": "Noob" },
    { "key": "Standaort", "value": "Daheim" },
    { "key": "Beschreibung", "value": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, eligendi nam a porro officia quidem ex magni. Sit placeat incidunt voluptates est aliquam, corporis vitae voluptas u dolores. Est, quae!" }
  ]
  constructor() { }

  ngOnInit() {
  }

}
