import { ResourceService } from './resource.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule } from '@angular/common/http';

import { CardComponent } from './card/card.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [CardComponent],
  exports: [CardComponent],
  providers: [ResourceService]
})
export class SharedModule { }
