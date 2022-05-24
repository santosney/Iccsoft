import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-magane',
  templateUrl: './magane.component.html',
  styleUrls: ['./magane.component.scss']
})
export class MaganeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  Closedialog(){
    this.dialog.closeAll();
  }
}
