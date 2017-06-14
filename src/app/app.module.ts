import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule} from '@angular/router';
import { FlexLayoutModule } from "@angular/flex-layout";
import {LeftSideComponent} from './leftside/leftside.component';
import {RightSideComponent} from './rightside/rightside.component';
import {DescriptionComponent} from './description/description.component';
import {SearchBarComponent} from './search-bar/search-bar.component';


import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { MaterialModule } from '@angular/material';
//import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MdInputModule} from '@angular/material';
import { AppComponent } from './app.component';
import { CircleComponent } from './circle/circle.component';
import { CircleService} from './service/circle.service';

import { CircleMemberComponent } from './circlemember/circlemember.component';
import { CircleInboxComponent } from './circleinbox/circleinbox.component';
import { InboxComponent } from './inbox/inbox.component';
import { CircleMemberInboxComponent } from './circlememberinbox/circlememberinbox.component';

const routes:Routes=[{path:'',component: InboxComponent},
{path:'circleinbox',component: CircleInboxComponent},
{path:'circlememberinbox/:member',component: CircleMemberInboxComponent}];

@NgModule({
  declarations: [
    AppComponent,
    CircleComponent,
    CircleMemberComponent,
    CircleInboxComponent,
    CircleMemberInboxComponent,
    InboxComponent,
    LeftSideComponent,
    RightSideComponent,
    DescriptionComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  	HttpModule,
  	BrowserAnimationsModule,
    FlexLayoutModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ CircleService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
