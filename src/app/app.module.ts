import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbCarousel, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import { AboutComponent } from './components/about/about.component';
import { ElogeComponent } from './components/eloge/eloge.component';
import { ErpComponent } from './components/erp/erp.component';
import { WebComponent } from './components/web/web.component';
import { MaganeComponent } from './components/magane/magane.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {FormsModule} from '@angular/forms';

import {GMapModule} from 'primeng/gmap';
import {ToastModule} from 'primeng/toast';
import {DialogModule} from  'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';

import {MessageService} from 'primeng/api';

// import {AgmCoreModule} from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AboutComponent,
    ElogeComponent,
    ErpComponent,
    WebComponent,
    MaganeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatInputModule,
    MatMenuModule,
    MatDialogModule,
    MatIconModule,
    MatDividerModule,
    GMapModule,
    ToastModule,
    DialogModule,
    ButtonModule,
    CheckboxModule,
    FormsModule,
    // AgmCoreModule.forRoot({
    //   apiKey: "AIzaSyBaFjlYPPK40JTY1uUP1X7vHqcCJ1TNm68"
    // })
  ],
  providers: [NgbCarousel, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
