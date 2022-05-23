import { Component, Inject, Input } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { TeamMember } from './team-member/types/team-member.type';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent {
  @Input() teamTitle: string = 'Team Title';
  @Input() eventSheduledTime: string = '15:20';
  public members: Array<TeamMember> = [
    { name: 'Tavi', role: 'dps' },
    { name: 'Sarafan', role: 'dps' },
  ];

  constructor(public dialog: MatDialog, private _snackBar: MatSnackBar) {}

  openDialog(): void {
    const newTeamMember: TeamMember = { name: '', role: '' };
    const dialogRef = this.dialog.open(TeamMemberCreateDialogComponent, {
      width: '450px',
      data: newTeamMember,
    });

    dialogRef.afterClosed().subscribe((result: TeamMember) => {
      if (!this.isTeamMemberValid(result)) return;
      this.addTeamMemberToTeam(result);
    });
  }

  private isTeamMemberValid(teamMember: TeamMember): boolean {
    if (teamMember.name.length < 3) {
      this._snackBar.open('Registration failed! Name is invalid', 'Close', {
        duration: 3000,
      });
      return false;
    }

    if (teamMember.role != 'Dps' && teamMember.role != 'Support') {
      this._snackBar.open('Registration failed! Role is invalid', 'Close', {
        duration: 3000,
      });
      return false;
    }

    if (this.members.length >= 8) {
      this._snackBar.open('A team can have maximum 8 players', 'Close', {
        duration: 3000,
      });
      return false;
    }

    this._snackBar.open('Player registered', 'Ok', {
      duration: 3000,
    });
    return true;
  }

  private addTeamMemberToTeam(teamMember: TeamMember) {
    this.members.push(teamMember);
  }

  public handleDeleteEvent($event: any) {
    this.members = this.members.filter((teamMember) => teamMember != $event);
  }
}

@Component({
  selector: 'TeamMemberCreateDialogComponent',
  templateUrl: './team-member-create.component.dialog.html',
  styles: ['.form { width: 60% }'],
})
export class TeamMemberCreateDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<TeamMemberCreateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TeamMember
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
