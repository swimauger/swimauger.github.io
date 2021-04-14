import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  openURL(url: string): void {
    window.open(url);
  }

}
