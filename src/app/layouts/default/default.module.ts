import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { HomeComponent } from '../../modules/home/home.component';
import { PostsComponent } from '../../modules/posts/posts.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../../shared/shared.module';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

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
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonToggleModule
    ]
})
export class DefaultModule { }
