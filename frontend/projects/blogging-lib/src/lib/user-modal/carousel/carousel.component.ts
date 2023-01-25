import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'lib-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @ViewChild('userPosts') userPosts!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  scrollLeft(){
    this.userPosts.nativeElement.scrollLeft -= 150;
  }

  scrollRight(){
    this.userPosts.nativeElement.scrollLeft += 150;
  }
}
