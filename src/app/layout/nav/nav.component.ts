import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/pages/auth/_services/auth.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(
    private titleTagService: Title,
    public auth: AuthService,
    private router: Router
  ) { }
  /**
   * sets the the Title of the Page in the Header
   * @param pageTitle 
   */
  public setTitle(pageTitle: string) {
    this.titleTagService.setTitle(pageTitle);
  }
  ngOnInit() {
    if (this.auth.getToken()) {
      this.auth.getUser().subscribe();
    }
  }
  onLogout() {
    this.auth.onLogout().subscribe();
  }

}
