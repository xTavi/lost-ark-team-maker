import { Component, Input, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { TeamMember } from './team-member/types/team-member.type';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
  @Input() teamTitle: string = 'Team Title';
  @Input() eventSheduledTime: string = '15:20';
  public members: Array<TeamMember> = [
    { name: 'Tavi', role: 'dps' },
    { name: 'Sarafan', role: 'dps' },
  ];

  constructor() {}

  ngOnInit(): void {}

  public handleDeleteEvent($event: any) {
    this.members = this.members.filter((teamMember) => teamMember != $event);
  }
}
