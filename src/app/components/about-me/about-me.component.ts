import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  private isOnEngineer: boolean = false;

  constructor(private element: ElementRef) { }

  ngOnInit(): void { }

  toggleAboutMe(event: AnimationEvent) {
    if (this.isOnEngineer) {
      this.element.nativeElement.querySelector('div.engineer h2').click();
    } else {
      this.element.nativeElement.querySelector('div.swimmer h2').click();
    }
  }

  showEngineer(event: MouseEvent): void {
    const $swimmer = (event.target as HTMLElement).parentElement;
    const $engineer = $swimmer?.nextElementSibling as HTMLElement;

    if ($swimmer) $swimmer.style.display = 'none';
    $engineer.style.display = 'block';
    this.isOnEngineer = true;

    const $hr = $swimmer?.parentElement?.previousElementSibling as HTMLElement;
    $hr.classList.remove('load');
    console.log($hr);
    setTimeout(() => $hr.classList.add('load'), 10);
  }

  showSwimmer(event: MouseEvent): void {
    const $engineer = (event.target as HTMLElement).parentElement;
    const $swimmer = $engineer?.previousElementSibling as HTMLElement;

    if ($engineer) $engineer.style.display = 'none';
    $swimmer.style.display = 'block';
    this.isOnEngineer = false;

    const $hr = $engineer?.parentElement?.previousElementSibling as HTMLElement;
    $hr.classList.remove('load');
    console.log($hr);
    setTimeout(() => $hr.classList.add('load'), 10);
  }

}
