import { Component, OnInit } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { matDialogAnimations,  MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MessageService } from 'primeng/api';
import { AboutComponent } from '../about/about.component';
import { ElogeComponent } from '../eloge/eloge.component';
import { ErpComponent } from '../erp/erp.component';
import { WebComponent } from '../web/web.component';

import { Loader } from '@googlemaps/js-api-loader';

export interface DialogData{
  animal: string;
  name: string;
}

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
 state_about = true;
  
  constructor(
    config: NgbCarousel, 
    public dialog: MatDialog,
    )
      {
        config.interval = 1000;
          config.wrap = false;
          config.keyboard = false;
          config.pauseOnHover = false;
      }

  ngOnInit(): void {
    const  map = document.getElementById("map")!;
    let loader = new Loader({
      apiKey: "AIzaSyBaFjlYPPK40JTY1uUP1X7vHqcCJ1TNm68"
    });
    loader.load().then( ()=>{
      new google.maps.Map(map, {
        center: {lat: 3.8687902, lng: 11.5176642},
        zoom: 6
      })
    })
  }



  ChangeState(){
    this.state_about = true;
  }

  openDialogAbout(): void{
    const dialogref = this.dialog.open(AboutComponent)
  }

  openDialogEloge(): void{
    const dialogref = this.dialog.open(ElogeComponent)
  }

  openDialogERP(): void{
    const dialogref = this.dialog.open(ErpComponent)
  }

  openDialogWeb(): void{
    const dialogref = this.dialog.open(WebComponent)
  }
}
