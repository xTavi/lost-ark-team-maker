import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TeamMember } from '../team/team-member/types/team-member.type';
import { TeamMemberCreateDialogComponent } from '../team/team.component';

@Component({
  selector: 'app-pending-list',
  templateUrl: './pending-list.component.html',
  styleUrls: ['./pending-list.component.scss'],
})
export class PendingListComponent {
  public constructor(
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {}

  public pendingMembers: PendingMember[] = [
    {
      name: 'PendingTavi',
      role: 'dps',
      disponibility: '',
      details: 'No details',
      intention: 'Valtan hard',
    },
  ];

  public addPlayerToPendingList(player: PendingMember) {
    this.pendingMembers.push(player);
  }

  public openAddPlayerDialog() {
    const newTeamMember: PendingMember = {
      name: '',
      role: '',
      intention: '',
      details: '',
      disponibility: '',
    };
    const dialogRef = this.dialog.open(PendingPlayerComponentDialog, {
      width: '450px',
      data: newTeamMember,
    });

    dialogRef.afterClosed().subscribe((result: PendingMember) => {
      if (result.name.length < 3) {
        this._snackBar.open('Registration failed! Name is invalid', 'Close', {
          duration: 3000,
        });
        return;
      }

      if (result.role != 'Dps' && result.role != 'Support') {
        this._snackBar.open('Registration failed! Role is invalid', 'Close', {
          duration: 3000,
        });
        return;
      }

      this.addPlayerToPendingList(result);
    });
  }

  public handleDeleteEvent($event: any) {
    this.pendingMembers = this.pendingMembers.filter(
      (pendingMember) => pendingMember != $event
    );
  }
}

export interface PendingMember extends TeamMember {
  intention: string;
  details: string;
  disponibility: string;
}

@Component({
  selector: 'PendingPlayerComponentDialog',
  templateUrl: './pending-player.component.dialog.html',
  styles: [
    '.form { width: 75% } .chip-class {padding: 10px 0px; font-family: Roboto, "Helvetica Neue", sans-serif} ',
  ],
})
export class PendingPlayerComponentDialog {
  constructor(
    public dialogRef: MatDialogRef<PendingPlayerComponentDialog>,
    @Inject(MAT_DIALOG_DATA) public data: TeamMember
  ) {}

  public isSelected = false;

  handleValtanSelection(event: any) {
    console.log(event.target);
  }

  handleSelection() {
    this.isSelected = !this.isSelected;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
