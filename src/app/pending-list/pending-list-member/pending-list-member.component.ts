import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PendingMember } from '../pending-list.component';

@Component({
  selector: 'app-pending-list-member',
  templateUrl: './pending-list-member.component.html',
  styleUrls: ['./pending-list-member.component.scss'],
})
export class PendingListMemberComponent {
  @Input() pendingMember: PendingMember = {} as PendingMember;
  @Output() deletePendingMemberEvent = new EventEmitter<PendingMember>();

  public deletePendingMember() {
    this.deletePendingMemberEvent.emit(this.pendingMember);
  }
}
