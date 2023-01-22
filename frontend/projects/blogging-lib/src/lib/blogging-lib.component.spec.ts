import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloggingLibComponent } from './blogging-lib.component';

describe('BloggingLibComponent', () => {
  let component: BloggingLibComponent;
  let fixture: ComponentFixture<BloggingLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloggingLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloggingLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
