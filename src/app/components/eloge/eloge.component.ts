import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MaganeComponent } from '../magane/magane.component';

@Component({
  selector: 'app-eloge',
  templateUrl: './eloge.component.html',
  styleUrls: ['./eloge.component.scss']
})
export class ElogeComponent implements OnInit {

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
