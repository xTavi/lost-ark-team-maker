import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PendingListMemberComponent } from './pending-list/pending-list-member/pending-list-member.component';
import { PendingListComponent } from './pending-list/pending-list.component';
import { TeamMemberComponent } from './team/team-member/team-member.component';
import {
  TeamComponent,
  TeamMemberCreateDialogComponent,
} from './team/team.component';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    DragDropModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
  ],
  declarations: [
    AppComponent,
    TeamComponent,
    TeamMemberComponent,
    TeamMemberCreateDialogComponent,
    PendingListComponent,
    PendingListMemberComponent,
  ],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {}
