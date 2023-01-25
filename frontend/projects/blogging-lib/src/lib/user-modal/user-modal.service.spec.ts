import { TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { UserModalService } from './user-modal.service';

describe('UserModalService', () => {
  let service: UserModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: [] },
        { provide: UserModalService , useValue: [] },
      ]
    });
    service = TestBed.inject(UserModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
