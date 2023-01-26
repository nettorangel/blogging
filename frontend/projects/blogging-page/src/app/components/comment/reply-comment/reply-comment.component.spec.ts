import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplyCommentComponent } from './reply-comment.component';

describe('ReplyCommentComponent', () => {
  let component: ReplyCommentComponent;
  let fixture: ComponentFixture<ReplyCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReplyCommentComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ReplyCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should emit newReply event when setNewReply has been called', () => {
    spyOn(component.newReply, 'emit');
    component.replyValue = "New reply example";
    component.setNewReply()
    expect(component.newReply.emit).toHaveBeenCalled();
  });

  it('Should emit newReply event when setNewReply has been called', () => {
    spyOn(component.newReply, 'emit');
    component.replyValue = "New reply example";
    component.setNewReply()
    expect(component.newReply.emit).toHaveBeenCalled();
  });

  it('Should change showReplyInput and replyValue is empty when changeReply has been called', () => {
    component.showReplyInput = true;
    component.changeReply();
    expect(component.showReplyInput).toBe(false);
    expect(component.replyValue).toBe('');
  });
});
