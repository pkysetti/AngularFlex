import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullwidthComponent } from './fullwidth.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from '../../modules/login/login.component';
import { SharedModule } from '../../shared/shared.module';
/*import {MatToolbarModule} from '@angular/material/toolbar';*/
import {MaterialUiModule} from '../../material-ui.module';


@NgModule({
  declarations: [
    FullwidthComponent,
    LoginComponent
  ],
    imports: [
        CommonModule,
        RouterModule,
        FlexLayoutModule,
        SharedModule,
       MaterialUiModule,
    ]
})
export class FullwidthModule {}

