import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'lib-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @ViewChild('carousel') carousel!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  scrollLeft(){
    this.carousel.nativeElement.scrollLeft -= 150;
  }

  scrollRight(){
    this.carousel.nativeElement.scrollLeft += 150;
  }
}
