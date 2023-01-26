import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommentComponent } from './comment.component';
import posts from '../../mock/rawPost';
import users from '../../mock/users';
import { User } from '../../models/user.model';
import { MyPostService } from '../../services/my-post.service';
import { delay, Observable, of } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CommentComponent', () => {
  let component: CommentComponent;
  let fixture: ComponentFixture<CommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule,BrowserAnimationsModule],
      declarations: [CommentComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: [] },
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.comment = posts.comments[0];
    component.allUsers = users;
    component.user = users[0];

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should format comment timestamp when call formatDate', () => {
    //@ts-expect-error
    const dateFormated = component.formatDate();
    expect(dateFormated).toBe('Wed, 20 Feb 2019 17:30:00 GMT-0300');
  });

  it('should add new comment when call setNewReply', () => {
    component.comment.comments = [];
    component.setNewReply('Reply test');
    expect(component.comment.comments[0].content).toBe('Reply test');
  });

  it('should return array list mutal friends when call getMutualFriends', () => {
    let userComment: User = users[3];
    const mutualFriends = component.getMutualFriends(userComment, component.user)
    expect(mutualFriends).toEqual([users[1]]);
  });

  it('should call openUserModal and open getMutualFriends and getUserModal in service', fakeAsync(() => {
    
    spyOn(component, "getMutualFriends").and.callThrough();    
    spyOn(component.userModalService, "getUserModal").and.callThrough();
    const service = fixture.debugElement.injector.get(MyPostService);
    
    spyOn(service, "getUser").and.callFake((): Observable<User> => {
      return of(users[1]).pipe(delay(100));
    });
    
    component.openUserModal(2);
    tick(150);    
    expect(component.getMutualFriends).toHaveBeenCalled();
    expect(component.userModalService.getUserModal).toHaveBeenCalled();
  }));
  
});
