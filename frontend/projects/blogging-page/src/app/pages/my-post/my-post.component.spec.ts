import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../../models/user.model';
import posts from '../../mock/rawPost';
import { commentThreeMock } from '../../mock/rawPost';
import users from '../../mock/users';
import { MyPostComponent } from './my-post.component';
import { Observable, of, delay } from 'rxjs';
import { MyPostService } from '../../services/my-post.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Comments } from '../../models/postResponse.model';

describe('MyPostComponent', () => {
  let component: MyPostComponent;
  let fixture: ComponentFixture<MyPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule, BrowserAnimationsModule],
      declarations: [MyPostComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: [] },
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MyPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
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

  it('should be transform array list in Three', () => {
    let comments: Comments[] = posts.comments;
    let commentsThree = component.buildCommentTree(comments);
    expect(commentsThree).toEqual(commentThreeMock);
  });
});
