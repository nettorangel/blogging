import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CarouselComponent } from './carousel.component';

@Component({
  template: `<lib-carousel><span class="teste">Hello World</span></lib-carousel>`,
})
class TestHostComponent {}

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselComponent, TestHostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show ng-content content', () => {
    const testFixture = TestBed.createComponent(TestHostComponent);
    const de: DebugElement = testFixture.debugElement.query(By.css('span'));
    const el: Element = de.nativeElement;    
    expect(el.textContent).toEqual('Hello World');
  });
});