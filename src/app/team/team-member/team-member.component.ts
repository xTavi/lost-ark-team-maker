import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TeamMember } from './types/team-member.type';

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.scss'],
})
export class TeamMemberComponent implements OnInit {
  @Input() member: TeamMember = { name: '', role: '' };
  @Output() deleteMemberEvent = new EventEmitter<TeamMember>();

  constructor() {}

  ngOnInit(): void {}

  public deleteTeamMember(): void {
    this.deleteMemberEvent.emit(this.member);
  }
}
