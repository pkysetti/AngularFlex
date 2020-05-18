import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { HomeComponent } from '../../modules/home/home.component';
import { PostsComponent } from '../../modules/posts/posts.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../../shared/shared.module';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MaterialUiModule} from '../../material-ui.module';

@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    PostsComponent
  ],
    imports: [
        CommonModule,
        RouterModule,
        FlexLayoutModule,
        SharedModule,
        MatButtonToggleModule,
        MaterialUiModule
    ]
})
export class DefaultModule { }
