import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingListMemberComponent } from './pending-list-member.component';

describe('PendingListMemberComponent', () => {
  let component: PendingListMemberComponent;
  let fixture: ComponentFixture<PendingListMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingListMemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingListMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
