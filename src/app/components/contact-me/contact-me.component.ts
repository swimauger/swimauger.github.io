import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onContactMe(event: MouseEvent): void {
    location.href = 'mailto:swimauger@gmail.com';
  }

  ngAfterViewInit(): void {
    ($('div.contact-me') as any).ripples({
      resolution: 512,
      dropRadius: 20,
      perturbance: 0.04,
    });
  }

}
