import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bird',
  templateUrl: './bird.component.html',
  styleUrls: ['./bird.component.scss']
})
export class BirdComponent implements OnInit {

  @Input() speed: number = 100;
  @Input() size: string = '100px';
  @Input() color: string = '#000';
  
  private animation: any;

  constructor(private element: ElementRef) { }

  ngOnDestroy(): void {
    if (this.animation) clearInterval(this.animation);
  }

  ngOnInit(): void {
    for (let $bird of Array.from(this.element.nativeElement.querySelectorAll('#bird'))) {
      ($bird as HTMLElement).style.width = this.size;
    }

    let i = 1;
    this.animation = setInterval(() => {
      const $bird = this.element.nativeElement.querySelector(`#bird:nth-child(${i})`);
      i = i < 10 ? i + 1 : 1;
      const $nextBird = this.element.nativeElement.querySelector(`#bird:nth-child(${i})`);

      $bird.style.display = 'none';
      $nextBird.style.display = 'block';
    }, this.speed);
  }

}
