import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-post-header',
  template: `
    <section class="l-header">
      <span class="l-header__title"> {{ title }} </span>
    </section>
    <section class="l-header__image">
      <ng-content></ng-content>
    </section>
  `,
  styleUrls: ['./post-header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PostHeaderComponent {
  @Input() title!: string;
}
