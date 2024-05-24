import { Component, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFrench from '@angular/common/locales/fr';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  message: string;
  messageMap: any = { 'en': 'Good Morning', 'fr': 'Bonjour', 'es': 'Buenos dÃƒÂ­as', 'de': 'Guten Morgen' };
  constructor() { }

  ngOnInit(): void {
    registerLocaleData(localeFrench);
  }

}
