import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rt-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = "RedolaTeam League";

  constructor() { }

  ngOnInit(): void {
  }

}
