import { Component, OnInit } from '@angular/core';
import { TeamMember } from '../team/team-member/types/team-member.type';

@Component({
  selector: 'app-pending-list',
  templateUrl: './pending-list.component.html',
  styleUrls: ['./pending-list.component.scss'],
})
export class PendingListComponent {
  public pendingMembers: PendingMember[] = [
    {
      name: 'PendingTavi',
      role: 'dps',
      details: 'No details',
      intention: 'Valtan hard',
    },
  ];

  public addPlayerToPendingList() {}

  public handleDeleteEvent($event: any) {
    this.pendingMembers = this.pendingMembers.filter(
      (pendingMember) => pendingMember != $event
    );
  }
}

export interface PendingMember extends TeamMember {
  intention: string;
  details: string;
}
