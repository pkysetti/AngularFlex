import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatNativeDateModule} from '@angular/material/core';
import {MAT_ACCORDION, MatAccordion, MatExpansionModule, MatExpansionPanel} from '@angular/material/expansion';
import {MatAccordionHarness} from '@angular/material/expansion/testing';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatRadioButton, MatRadioModule} from '@angular/material/radio';
import {MatGridListModule} from '@angular/material/grid-list';



@NgModule({

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatListModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatSidenavModule,
    MatRadioModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [],
  exports: [ MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatListModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatSidenavModule,
    MatRadioModule,
    MatGridListModule
    ]
})
export class MaterialUiModule { }
