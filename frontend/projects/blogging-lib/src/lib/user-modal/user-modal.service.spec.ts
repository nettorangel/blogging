import { TestBed } from '@angular/core/testing';
import { MatDialogConfig, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { User } from 'projects/blogging-page/src/app/models/user.model';
import { UserModalComponent } from './user-modal.component';

import { UserModalService } from './user-modal.service';

describe('UserModalService', () => {
  let service: UserModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatDialogModule, BrowserAnimationsModule],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: [] },
        { provide: UserModalService },
      ]
    });
    service = TestBed.inject(UserModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be open dialog', () => {
    spyOn(service, "getUserModal").and.callThrough();
    spyOn(service.dialog, "open").and.callThrough();
    service.getUserModal({} as User, []);
    expect(service.dialog.open).toHaveBeenCalled();
  });

});
