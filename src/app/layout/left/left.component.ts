import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss']
})
export class LeftComponent implements OnInit {

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
