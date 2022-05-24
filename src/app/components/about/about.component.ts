import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MaganeComponent } from '../magane/magane.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  Closedialog(){
    this.dialog.closeAll();
  }
  Managedialog(){
    this.dialog.open(MaganeComponent);
  }
}
