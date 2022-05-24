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

  options: any;

  overlays : any;

  dialogVisible: any;

  markerTitle: any;

  selectedPosition: any;

  infoWindow: any;

  draggable: any;
  
  state_about = true;
  animal = '';
  name =  "";
  constructor(
    config: NgbCarousel, 
    public dialog: MatDialog,
    private messageService: MessageService, 
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
        center: {lat: 36.890257, lng: 30.707417},
        zoom: 6
      })
    })
    // this.options = {
    //   center : {lat: '36.890257', lng: '30.707417'},
    //   zoom: 12
    // }
    // this.initOverlays();
    // this.infoWindow = new google.maps.InfoWindow();
  }

  // handleMapClick(event: any){
  //   this.dialogVisible = true;
  //   this.selectedPosition = event.latLng;
  // }

  // handleOverlayClick(event: any){
  //   let isMarker = event.overlays.getTitle();
  //   if(isMarker){
  //     let title = event.overlays.getTitle();
  //     this.infoWindow.setContent('' +title+'');
  //     this.infoWindow.open(event.map, event.overlays);
  //     event.map.setcenter(event.overlays.getPosition());
  //     this.messageService.add({severity: 'info', summary: 'Emplacement choisis', detail: 'votre emplacement est :'+title});
  //   }
  //   else {
  //     this.messageService.add({severity: 'info', summary: 'shape selected', detail: ''});
  //   }
  // }

  // addMarker(){
  //   this.overlays.push(new google.maps.Marker({position: {lat: this.selectedPosition.lat(), lng: this.selectedPosition.lng()}, title: this.markerTitle, draggable: this.draggable}));
  //   this.markerTitle = null;
  //   this.dialogVisible = false;
  // }

  // handleDragEnd(event: any){
  //   this.messageService.add({severity: 'info', summary: 'marker dragged', detail: event.overlays.getTitle()});
  // }

  // initOverlays(){
  //   if(!this.overlays || !this.overlays.lenght){
  //     this.overlays = [
  //       new google.maps.Marker({position: {lat: 36.879466, lng: 30.667648}, title:"Konyaalti"}),
  //       new google.maps.Marker({position: {lat: 36.883707, lng: 30.689216}, title:"Ataturk Park"}),
  //       new google.maps.Marker({position: {lat: 36.885233, lng: 30.702323}, title:"Oldtown"}),
  //       new google.maps.Polygon({paths: [
  //           {lat: 36.9177, lng: 30.7854},{lat: 36.8851, lng: 30.7802},{lat: 36.8829, lng: 30.8111},{lat: 36.9177, lng: 30.8159}
  //       ], strokeOpacity: 0.5, strokeWeight: 1,fillColor: '#1976D2', fillOpacity: 0.35
  //       }),
  //       new google.maps.Circle({center: {lat: 36.90707, lng: 30.56533}, fillColor: '#1976D2', fillOpacity: 0.35, strokeWeight: 1, radius: 1500}),
  //       new google.maps.Polyline({path: [{lat: 36.86149, lng: 30.63743},{lat: 36.86341, lng: 30.72463}], geodesic: true, strokeColor: '#FF0000', strokeOpacity: 0.5, strokeWeight: 2})
  //     ];
  //   }
  // }

  // zoomIn(map: any){
  //     map.setZoom(map.getZoom()+1);
  // }

  // zoomOut(map: any){
  //   map.setZoom(map.getZoom()-1)
  // }

  // clear(){
  //   this.overlays = [];
  // }


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
