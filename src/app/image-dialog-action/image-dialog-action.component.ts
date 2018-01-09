import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';

import { ImageDialogComponent } from '../image-dialog/image-dialog.component';


@Component({
  selector: 'app-image-dialog-action',
  templateUrl: './image-dialog-action.component.html',
  styleUrls: ['./image-dialog-action.component.css']
})
export class ImageDialogActionComponent implements OnInit {

  @Input() image

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    this.dialog.open(ImageDialogComponent, {
      data: {
        image: this.image
      }
    });
  }
}
