import { Component, OnInit } from '@angular/core';
import { SideNavService } from '../nav/side-nav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private sideNavService: SideNavService) { }

  ngOnInit(): void {
  }

  toggle() { 
    this.sideNavService.toggle();
  }

}
