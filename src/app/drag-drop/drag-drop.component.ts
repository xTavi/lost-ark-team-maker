import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss'],
})
export class DragDropComponent {
  columns = [
    {
      id: 0,
      isSeparatingColumn: false,
      groups: [
        {
          id: 1,
          title: 'Group 1',
          items: [
            {
              name: 'Item 1 - Group 1',
            },
            {
              name: 'Item 2 - Group 1',
            },
            {
              name: 'Item 3 - Group 1',
            },
            {
              name: 'Item 4 - Group 1',
            },
          ],
        },
        {
          id: 2,
          title: 'Group 2',
          items: [
            {
              name: 'Item 1 - Group 2',
            },
            {
              name: 'Item 2 - Group 2',
            },
            {
              name: 'Item 3 - Group 2',
            },
            {
              name: 'Item 4 - Group 2',
            },
          ],
        },
        {
          id: 3,
          title: 'Group 3',
          items: [
            {
              name: 'Item 1 - Group 3',
            },
            {
              name: 'Item 2 - Group 3',
            },
            {
              name: 'Item 3 - Group 3',
            },
            {
              name: 'Item 4 - Group 3',
            },
          ],
        },
      ],
    },
    { id: 1, isSeparatingColumn: true },
    {
      id: 2,
      isSeparatingColumn: false,
      groups: [
        {
          id: 4,
          title: 'Group 4',
          items: [
            {
              name: 'Item 1 - Group 4',
            },
            {
              name: 'Item 2 - Group 4',
            },
            {
              name: 'Item 3 - Group 4',
            },
            {
              name: 'Item 4 - Group 4',
            },
          ],
        },
        {
          id: 5,
          title: 'Group 5',
          items: [
            {
              name: 'Item 1 - Group 5',
            },
            {
              name: 'Item 2 - Group 5',
            },
            {
              name: 'Item 3 - Group 5',
            },
            {
              name: 'Item 4 - Group 5',
            },
          ],
        },
        {
          id: 6,
          title: 'Group 6',
          items: [
            {
              name: 'Item 1 - Group 6',
            },
            {
              name: 'Item 2 - Group 6',
            },
            {
              name: 'Item 3 - Group 6',
            },
            {
              name: 'Item 4 - Group 6',
            },
          ],
        },
      ],
    },
  ];

  dropItem(event: CdkDragDrop<string[], string[], any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  getConnectedList(): any[] {
    return this.columns.map((x) => `${x.id}`);
  }

  dropGroup(event: CdkDragDrop<string[], string[], any>) {
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
  }
}
